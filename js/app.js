// Main application logic

let currentCountry = 'US';
let currentData = null;

// Google Geocoding API 验证地址
const GOOGLE_API_KEY = 'AIzaSyCzwCz8au4axvmOAuCX66gw3M1kTdnb4Bo';

async function validateAddress(address) {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.results.length > 0) {
      return {
        valid: true,
        formatted_address: data.results[0].formatted_address,
        lat: data.results[0].geometry.location.lat,
        lng: data.results[0].geometry.location.lng
      };
    }
    return { valid: false };
  } catch (error) {
    // 如果网络错误，不阻塞，显示为未验证
    return { valid: false, error: true };
  }
}

function generateIdentity(countryCode) {
  const country = COUNTRIES[countryCode];
  if (!country) return null;

  const gender = rand(0, 1) === 0 ? 'Male' : 'Female';
  const firstNames = gender === 'Male' ? country.firstNames.male : country.firstNames.female;
  const firstName = pickRandom(firstNames);
  const lastName = pickRandom(country.lastNames);
  const fullName = `${firstName} ${lastName}`;
  const title = gender === 'Male' ? 'Mr.' : (rand(0, 1) === 0 ? 'Mrs.' : 'Ms.');

  const cityObj = pickRandom(country.cities);
  const city = cityObj.city;
  const state = cityObj.state;
  const zip = pickRandom(cityObj.zips);
  const streetNum = rand(1, 999);
  const street = pickRandom(cityObj.streets);
  const district = pickRandom(cityObj.districts);
  const streetAddress = country.streetAddress(streetNum, street, city, zip, state);
  const phone = country.phoneFormat();

  const card = generateCreditCard();

  const occupation1 = pickRandom(OCCUPATIONS);
  const remainingOccupations = OCCUPATIONS.filter(o => o !== occupation1);
  const occupation2 = pickRandom(remainingOccupations);
  const occupation = `${occupation1}, ${occupation2}`;
  const company = rand(0, 3) === 0 ? '无' : pickRandom(COMPANIES);
  const companySize = company === '无' ? '无' : pickRandom(COMPANY_SIZES);
  const employmentStatus = pickRandom(EMPLOYMENT_STATUSES);
  const salaryRange = country.salaryRange;
  const salary = rand(salaryRange[0], salaryRange[1]);
  const formattedSalary = formatSalary(countryCode, salary);

  const height = generateHeight();
  const weight = generateWeight();
  const bloodType = pickRandom(BLOOD_TYPES);
  const os = pickRandom(OS_LIST);
  const guid = generateGUID();
  const ua = pickRandom(USER_AGENTS);
  const education = pickRandom(EDUCATION_LEVELS);
  const website = generateWebsite();
  const securityQ = pickRandom(SECURITY_QUESTIONS);
  const securityA = generateSecurityAnswer();
  const username = generateUsername();
  const password = generatePassword();
  const email = generateEmail(firstName, lastName);
  const birthday = generateBirthday();
  const idNumber = country.idFormat();

  return {
    // Basic info
    fullName,
    firstName,
    lastName,
    gender,
    birthday,
    title,
    // Address
    streetAddress,
    district,
    city,
    zip,
    phone,
    // Email
    email,
    // Credit card
    cardType: card.type,
    cardNumber: card.number,
    cvv: card.cvv,
    expiry: card.expiry,
    // Employment
    occupation,
    company,
    companySize,
    employmentStatus,
    salary: formattedSalary,
    // ID
    idLabel: country.idLabel,
    idNumber,
    // More info
    username,
    password,
    height: height.display,
    weight: weight.display,
    bloodType,
    os,
    guid,
    ua,
    education,
    website,
    securityQuestion: securityQ,
    securityAnswer: securityA,
    // Country info
    countryName: country.name,
    countryFlag: country.flag,
  };
}

function openGoogleMaps(lat, lng, address) {
  let url;
  if (lat !== undefined && lng !== undefined) {
    url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  } else {
    const addr = address || document.querySelector('[data-field="address"]')?.textContent || '';
    url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
  }
  window.open(url, '_blank');
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    // Show brief feedback
  }).catch(() => {
    // Fallback
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  });
}

function showCopied(btn) {
  const original = btn.innerHTML;
  btn.innerHTML = '✓';
  btn.classList.add('copied');
  setTimeout(() => {
    btn.innerHTML = original;
    btn.classList.remove('copied');
  }, 1500);
}

function renderField(label, value, id) {
  if (!value && value !== 0) value = '—';
  return `
    <div class="field-row">
      <span class="field-label">${label}</span>
      <span class="field-value" id="${id}">${value}</span>
      <button class="copy-btn" onclick="copyField('${id}', this)" title="复制">⧉</button>
    </div>
  `;
}

function copyField(id, btn) {
  const el = document.getElementById(id);
  if (el) {
    copyToClipboard(el.textContent);
    showCopied(btn);
  }
}

function renderIdentity(data) {
  if (!data) return;

  document.getElementById('country-display').textContent = `${data.countryFlag} ${data.countryName}`;

  const sections = [
    {
      id: 'section-basic',
      title: '📋 基本资料',
      fields: [
        { label: '全名', value: data.fullName, id: 'f-fullname' },
        { label: '性别', value: data.gender, id: 'f-gender' },
        { label: '生日', value: data.birthday, id: 'f-birthday' },
        { label: 'Title', value: data.title, id: 'f-title' },
      ]
    },
    {
      id: 'section-address',
      title: '📍 地址',
      fields: [
        { label: '街道', value: data.streetAddress, id: 'f-street' },
        { label: '区县', value: data.district || '—', id: 'f-district' },
        { label: '城市', value: data.city, id: 'f-city' },
        { label: '邮编', value: data.zip, id: 'f-zip' },
        { label: '电话号码', value: data.phone, id: 'f-phone' },
      ],
      extra: `
        <span data-field="address" style="display:none">${data.streetAddress}, ${data.city}</span>
        <div id="address-validation" class="address-validation">
          <span class="validation-spinner">⏳ 正在验证地址…</span>
        </div>
        <button class="maps-btn" id="maps-btn" onclick="openGoogleMaps()">📍 在Google Maps查看</button>
      `,
    },
    {
      id: 'section-email',
      title: '📧 临时邮箱',
      fields: [
        { label: '邮箱', value: data.email, id: 'f-email' },
      ]
    },
    {
      id: 'section-card',
      title: '💳 就业 & 信用卡',
      fields: [
        { label: '信用卡类型', value: data.cardType, id: 'f-cardtype' },
        { label: '信用卡号', value: data.cardNumber, id: 'f-cardnum' },
        { label: 'CVV2', value: data.cvv, id: 'f-cvv' },
        { label: '过期时间', value: data.expiry, id: 'f-expiry' },
        { label: '职业', value: data.occupation, id: 'f-occupation' },
        { label: '公司名称', value: data.company, id: 'f-company' },
        { label: '公司规模', value: data.companySize, id: 'f-companysize' },
        { label: '就业状态', value: data.employmentStatus, id: 'f-empstatus' },
        { label: '月薪', value: data.salary, id: 'f-salary' },
      ]
    },
    {
      id: 'section-id',
      title: '🆔 身份证',
      fields: [
        { label: data.idLabel, value: data.idNumber, id: 'f-idnum' },
      ]
    },
    {
      id: 'section-more',
      title: '🔧 更多资料',
      fields: [
        { label: '用户名', value: data.username, id: 'f-username' },
        { label: '密码', value: data.password, id: 'f-password' },
        { label: '身高', value: data.height, id: 'f-height' },
        { label: '体重', value: data.weight, id: 'f-weight' },
        { label: '血型', value: data.bloodType, id: 'f-bloodtype' },
        { label: '操作系统', value: data.os, id: 'f-os' },
        { label: 'GUID', value: data.guid, id: 'f-guid' },
        { label: '浏览器 User Agent', value: data.ua, id: 'f-ua' },
        { label: '教育背景', value: data.education, id: 'f-education' },
        { label: '个人主页', value: data.website, id: 'f-website' },
        { label: '安全问题', value: data.securityQuestion, id: 'f-secq' },
        { label: '问题答案', value: data.securityAnswer, id: 'f-seca' },
      ]
    }
  ];

  sections.forEach(section => {
    const container = document.getElementById(section.id);
    if (!container) return;
    let html = '';
    section.fields.forEach(f => {
      html += renderField(f.label, f.value, f.id);
    });
    if (section.extra) {
      html += section.extra;
    }
    container.innerHTML = html;
  });
}

function generate() {
  currentData = generateIdentity(currentCountry);
  renderIdentity(currentData);

  // Add animation
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.classList.remove('animate-in');
    void card.offsetWidth;
    card.classList.add('animate-in');
  });

  // Asynchronously validate address
  if (currentData) {
    validateAddress(currentData.streetAddress).then(result => {
      const validationEl = document.getElementById('address-validation');
      if (!validationEl) return;

      if (result.error) {
        // Network error — offline mode
        validationEl.innerHTML = `<span class="offline-badge">🔌 离线模式</span>`;
      } else if (result.valid) {
        // Verified — update maps button with precise coordinates
        const mapsBtn = document.getElementById('maps-btn');
        if (mapsBtn) {
          mapsBtn.onclick = () => openGoogleMaps(result.lat, result.lng);
        }
        validationEl.innerHTML = `
          <span class="verified-badge">✅ 已验证</span>
          <div class="formatted-address">${result.formatted_address}</div>
          <div class="coordinates">📌 ${result.lat.toFixed(6)}, ${result.lng.toFixed(6)}</div>
        `;
      } else {
        // Not verified
        validationEl.innerHTML = `
          <span class="unverified-badge">⚠️ 未验证</span>
          <button class="regenerate-btn" onclick="generate()">🔄 重新生成</button>
        `;
      }
    });
  }
}

function selectCountry(code) {
  currentCountry = code;
  // Update active button
  document.querySelectorAll('.country-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.code === code);
  });
  generate();
}

function initCountryButtons() {
  const container = document.getElementById('country-buttons');
  if (!container) return;
  container.innerHTML = Object.entries(COUNTRIES).map(([code, c]) => `
    <button class="country-btn ${code === currentCountry ? 'active' : ''}" 
            data-code="${code}" 
            onclick="selectCountry('${code}')"
            title="${c.name}">
      ${c.flag} ${c.name} ${code}
    </button>
  `).join('');

  // Search filtering
  const searchInput = document.getElementById('country-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      document.querySelectorAll('.country-btn').forEach(btn => {
        const code = btn.dataset.code;
        const country = COUNTRIES[code];
        if (!query) {
          btn.style.display = '';
        } else {
          const matchName = country.name.toLowerCase().includes(query);
          const matchCode = code.toLowerCase().includes(query);
          btn.style.display = (matchName || matchCode) ? '' : 'none';
        }
      });
    });
  }
}

function initCountrySelect() {
  const select = document.getElementById('country-select');
  if (!select) return;
  select.innerHTML = Object.entries(COUNTRIES).map(([code, c]) =>
    `<option value="${code}" ${code === currentCountry ? 'selected' : ''}>${c.flag} ${c.name} ${code}</option>`
  ).join('');
  select.addEventListener('change', (e) => selectCountry(e.target.value));
}

document.addEventListener('DOMContentLoaded', () => {
  initCountryButtons();
  initCountrySelect();
  generate();

  const generateBtn = document.getElementById('generate-btn');
  if (generateBtn) {
    generateBtn.addEventListener('click', generate);
  }
});
