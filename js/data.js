// Country data for the global address generator
const COUNTRIES = {
  US: {
    name: '美国',
    flag: '🇺🇸',
    code: 'US',
    phoneCode: '+1',
    currency: '$',
    phoneFormat: () => {
      const area = rand(200, 999);
      const p1 = rand(200, 999);
      const p2 = rand(1000, 9999);
      return `+1 ${area} ${p1} ${p2}`;
    },
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark'],
      female: ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara', 'Elizabeth', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Lisa', 'Nancy', 'Betty', 'Margaret', 'Sandra']
    },
    lastNames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'],
    cities: [
      { city: 'New York', state: 'NY', zips: ['10001','10002','10003'], streets: ['Broadway','5th Avenue','Wall Street','Park Avenue','Madison Avenue'], districts: ['Manhattan','Brooklyn','Queens'], areaCode: '212' },
      { city: 'Los Angeles', state: 'CA', zips: ['90001','90012','90024'], streets: ['Hollywood Boulevard','Sunset Boulevard','Wilshire Boulevard','Rodeo Drive','Venice Boulevard'], districts: ['Hollywood','Beverly Hills','Santa Monica'], areaCode: '213' },
      { city: 'Chicago', state: 'IL', zips: ['60601','60602','60611'], streets: ['Michigan Avenue','State Street','Lake Shore Drive','Wacker Drive','Clark Street'], districts: ['The Loop','Lincoln Park','Wicker Park'], areaCode: '312' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${state} ${zip}, USA`,
    idLabel: 'SSN',
    idFormat: () => `${String(rand(100, 999))}-${String(rand(10, 99))}-${String(rand(1000, 9999))}`,
    salaryRange: [3000, 12000],
  },
  GB: {
    name: '英国',
    flag: '🇬🇧',
    code: 'GB',
    phoneCode: '+44',
    currency: '£',
    phoneFormat: () => `+44 ${rand(1000, 9999)} ${rand(100000, 999999)}`,
    zipFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPRSTUVWXY';
      const l1 = letters[rand(0, letters.length - 1)];
      const l2 = letters[rand(0, letters.length - 1)];
      return `${l1}${l2}${rand(1, 9)} ${rand(1, 9)}${letters[rand(0, letters.length - 1)]}${letters[rand(0, letters.length - 1)]}`;
    },
    firstNames: {
      male: ['Oliver', 'George', 'Harry', 'Jack', 'Jacob', 'Noah', 'Charlie', 'Muhammad', 'Thomas', 'Oscar', 'William', 'James', 'Henry', 'Alfie', 'Freddie'],
      female: ['Olivia', 'Amelia', 'Isla', 'Ava', 'Emily', 'Isabella', 'Mia', 'Poppy', 'Ella', 'Lily', 'Grace', 'Sophia', 'Evie', 'Sophie', 'Charlotte']
    },
    lastNames: ['Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Roberts', 'Johnson', 'Lewis', 'Walker', 'Robinson', 'Wood', 'Thompson', 'White', 'Watson', 'Jackson', 'Wright'],
    cities: [
      { city: 'London', state: 'England', zips: ['SW1A 1AA','EC1A 1BB','W1A 0AX'], streets: ['Oxford Street','Baker Street','Piccadilly','Regent Street','Bond Street'], districts: ['Westminster','Kensington','Camden'], areaCode: '020' },
      { city: 'Manchester', state: 'England', zips: ['M1 1AA','M2 3AB','M4 1HQ'], streets: ['Market Street','Deansgate','Oxford Road','Piccadilly Gardens','Portland Street'], districts: ['City Centre','Salford','Trafford'], areaCode: '0161' },
      { city: 'Edinburgh', state: 'Scotland', zips: ['EH1 1AA','EH2 2AB','EH3 5AT'], streets: ['Princes Street','Royal Mile','George Street','Leith Walk','Morningside Road'], districts: ['Old Town','New Town','Leith'], areaCode: '0131' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, UK`,
    idLabel: 'NI Number',
    idFormat: () => {
      const l = 'ABCDEFGHIJKLMNOPRSTUVWXY';
      return `${l[rand(0,l.length-1)]}${l[rand(0,l.length-1)]} ${rand(100000,999999)} ${l[rand(0,l.length-1)]}`;
    },
    salaryRange: [2500, 10000],
  },
  CN: {
    name: '中国',
    flag: '🇨🇳',
    code: 'CN',
    phoneCode: '+86',
    currency: '¥',
    phoneFormat: () => `+86 1${['3','4','5','7','8'][rand(0,4)]}${rand(100000000, 999999999)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['Wei', 'Qiang', 'Lei', 'Jun', 'Yong', 'Tao', 'Chao', 'Ming', 'Jian', 'Feng', 'Jie', 'Xin', 'Bo', 'Hao', 'Yu'],
      female: ['Fang', 'Na', 'Min', 'Jing', 'Xiuying', 'Hui', 'Yan', 'Juan', 'Ting', 'Li', 'Yan', 'Ling', 'Xue', 'Jie', 'Mei']
    },
    lastNames: ['Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou', 'Xu', 'Sun', 'Ma', 'Zhu', 'Hu', 'Guo', 'He', 'Gao', 'Lin', 'Zheng'],
    cities: [
      { city: 'Beijing', state: 'Beijing', zips: ['100001','100020','100080'], streets: ['Changan Avenue','Wangfujing Street','Xidan Street','Chaoyang Road','Jianguomenwai Avenue'], districts: ['Dongcheng','Xicheng','Chaoyang'], areaCode: '010' },
      { city: 'Shanghai', state: 'Shanghai', zips: ['200001','200010','200025'], streets: ['Nanjing Road','Huaihai Road','Renmin Avenue','Sichuan North Road','The Bund'], districts: ['Huangpu','Pudong','Jing\'an'], areaCode: '021' },
      { city: 'Guangzhou', state: 'Guangdong', zips: ['510000','510010','510095'], streets: ['Tianhe Road','Beijing Road','Zhongshan Avenue','Yuexiu Road','Huanshi East Road'], districts: ['Tianhe','Yuexiu','Haizhu'], areaCode: '020' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, China`,
    idLabel: 'ID Card',
    idFormat: () => {
      const provinces = ['11', '12', '13', '14', '15', '21', '22', '23', '31', '32', '33', '34', '35', '36', '37', '41', '42', '43', '44', '45'];
      const prov = provinces[rand(0, provinces.length-1)];
      const city = String(rand(1, 9)).padStart(2, '0');
      const district = String(rand(1, 9)).padStart(2, '0');
      const year = rand(1960, 2000);
      const month = String(rand(1, 12)).padStart(2, '0');
      const day = String(rand(1, 28)).padStart(2, '0');
      const seq = String(rand(100, 999));
      const checkDigits = '0123456789X';
      const check = checkDigits[rand(0, checkDigits.length-1)];
      return `${prov}${city}${district}${year}${month}${day}${seq}${check}`;
    },
    salaryRange: [5000, 30000],
  },
  JP: {
    name: '日本',
    flag: '🇯🇵',
    code: 'JP',
    phoneCode: '+81',
    currency: '¥',
    phoneFormat: () => `+81 ${rand(10, 99)}-${rand(1000, 9999)}-${rand(1000, 9999)}`,
    zipFormat: () => `${String(rand(100, 999))}-${String(rand(1000, 9999))}`,
    firstNames: {
      male: ['Hiroto', 'Ren', 'Yuma', 'Haruto', 'Minato', 'Yuto', 'Itsuki', 'Asahi', 'Haru', 'Hayate', 'Sho', 'Kai', 'Yamato', 'Aoi', 'Ritsu'],
      female: ['Hina', 'Rin', 'Yuna', 'Tsumugi', 'An', 'Aoi', 'Sakura', 'Miwa', 'Riko', 'Koharu', 'Hana', 'Momo', 'Yu', 'Ai', 'Mio']
    },
    lastNames: ['Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Ito', 'Watanabe', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato', 'Yoshida', 'Yamada', 'Sasaki', 'Yamaguchi', 'Matsumoto', 'Inoue', 'Kimura', 'Hayashi', 'Saito', 'Shimizu'],
    cities: [
      { city: 'Tokyo', state: 'Tokyo', zips: ['100-0001','150-0001','160-0022'], streets: ['Ginza', 'Shinjuku-dori','Shibuya Center-gai','Ikebukuro West Gate Street','Asakusa-dori'], districts: ['Chiyoda','Shinjuku','Shibuya'], areaCode: '03' },
      { city: 'Osaka', state: 'Osaka', zips: ['530-0001','542-0076','556-0011'], streets: ['Midosuji','Shinsaibashi-suji','Namba-dori','Tennoji-dori','Kita-horie'], districts: ['Kita','Chuo','Naniwa'], areaCode: '06' },
      { city: 'Nagoya', state: 'Aichi', zips: ['460-0001','461-0001','462-0819'], streets: ['Nishiki-dori','Otsu-dori','Hirokoji','Sakae-dori','Hisaya-odori'], districts: ['Naka','Higashi','Chikusa'], areaCode: '052' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num}-${rand(1,9)}-${rand(1,20)} ${street}, ${city} ${zip}, Japan`,
    idLabel: 'My Number',
    idFormat: () => String(rand(100000000000, 999999999999)),
    salaryRange: [200000, 800000],
  },
  KR: {
    name: '韩国',
    flag: '🇰🇷',
    code: 'KR',
    phoneCode: '+82',
    currency: '₩',
    phoneFormat: () => `+82 ${rand(10, 99)}-${rand(1000, 9999)}-${rand(1000, 9999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Minjun', 'Seojun', 'Doyun', 'Yejun', 'Siwoo', 'Hajun', 'Jiho', 'Junseo', 'Junwoo', 'Hyunwoo', 'Jihun', 'Geonwoo', 'Woojin', 'Seonho', 'Seojin'],
      female: ['Seoyeon', 'Seoyun', 'Jiwoo', 'Seohyeon', 'Haeun', 'Hayoon', 'Minseo', 'Jiyu', 'Yunseo', 'Chaewon', 'Sua', 'Jia', 'Jimin', 'Arin', 'Yeeun']
    },
    lastNames: ['Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang', 'Jo', 'Yoon', 'Jang', 'Lim', 'Han', 'Oh', 'Seo', 'Shin', 'Kwon', 'Hwang', 'An', 'Song', 'Ryu', 'Jeon'],
    cities: [
      { city: 'Seoul', state: 'Seoul', zips: ['04524','06141','03080'], streets: ['Gangnam-daero','Teheran-ro','Jongno','Sejongno','Eulji-ro'], districts: ['Gangnam-gu','Jongno-gu','Jung-gu'], areaCode: '02' },
      { city: 'Busan', state: 'Busan', zips: ['48058','47012','49200'], streets: ['Haeundae-ro','Jungang-daero','Gwangbok-ro','Dongnae-ro','Sajik-ro'], districts: ['Haeundae-gu','Jung-gu','Dongnae-gu'], areaCode: '051' },
      { city: 'Incheon', state: 'Incheon', zips: ['22100','21565','22300'], streets: ['Gyeongin-ro','Inha-ro','Bupyeong-daero','Juan-ro','Songdo-daero'], districts: ['Jung-gu','Bupyeong-gu','Yeonsu-gu'], areaCode: '032' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, South Korea`,
    idLabel: 'Resident Registration Number',
    idFormat: () => {
      const year = rand(60, 99);
      const month = String(rand(1, 12)).padStart(2, '0');
      const day = String(rand(1, 28)).padStart(2, '0');
      const gender = [1, 2, 3, 4][rand(0, 3)];
      const seq = String(rand(100000, 999999));
      return `${year}${month}${day}-${gender}${seq}`;
    },
    salaryRange: [2000000, 8000000],
  },
  PH: {
    name: '菲律宾',
    flag: '🇵🇭',
    code: 'PH',
    phoneCode: '+63',
    currency: '₱',
    phoneFormat: () => `+63 ${rand(900, 999)} ${rand(100, 999)} ${rand(1000, 9999)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Juan', 'Jose', 'Miguel', 'Carlo', 'Mark', 'John', 'Michael', 'Angelo', 'Christian', 'Joseph', 'Daniel', 'David', 'Gabriel', 'Jerome', 'Lawrence'],
      female: ['Maria', 'Ana', 'Rosa', 'Carmen', 'Luz', 'Grace', 'Patricia', 'Maricel', 'Cristina', 'Lourdes', 'Jennifer', 'Michelle', 'Jasmine', 'Rhea', 'Rowena']
    },
    lastNames: ['Santos', 'Reyes', 'Cruz', 'Bautista', 'Ocampo', 'Garcia', 'Mendoza', 'Torres', 'Castillo', 'Flores', 'Ramos', 'Aquino', 'Dela Cruz', 'Villanueva', 'Perez'],
    cities: [
      { city: 'Manila', state: 'Metro Manila', zips: ['1000','1001','1002'], streets: ['Rizal Avenue','Taft Avenue','España Boulevard','Roxas Boulevard','Quezon Boulevard'], districts: ['Ermita','Malate','Binondo'], areaCode: '02' },
      { city: 'Cebu City', state: 'Cebu', zips: ['6000','6001','6002'], streets: ['Colon Street','Osmena Boulevard','Gorordo Avenue','Cebu South Road','Mandaue Bypass'], districts: ['Capitol Site','Lahug','Banilad'], areaCode: '032' },
      { city: 'Davao', state: 'Davao Region', zips: ['8000','8001','8003'], streets: ['Claro M. Recto Avenue','J.P. Laurel Avenue','Quimpo Boulevard','Quirino Avenue','Ilustre Street'], districts: ['Poblacion','Agdao','Buhangin'], areaCode: '082' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${zip} ${state}, Philippines`,
    idLabel: 'PhilSys ID',
    idFormat: () => `${rand(1000, 9999)}-${rand(1000, 9999)}-${rand(1000, 9999)}`,
    salaryRange: [15000, 80000],
  },
  DE: {
    name: '德国',
    flag: '🇩🇪',
    code: 'DE',
    phoneCode: '+49',
    currency: '€',
    phoneFormat: () => `+49 ${rand(100, 999)} ${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Luca', 'Leon', 'Finn', 'Noah', 'Paul', 'Jonas', 'Luis', 'Felix', 'Maximilian', 'Ben', 'Elias', 'Tim', 'Jan', 'Nico', 'Stefan'],
      female: ['Emma', 'Mia', 'Hannah', 'Lea', 'Lena', 'Leoni', 'Anna', 'Sophie', 'Julia', 'Lara', 'Lisa', 'Marie', 'Laura', 'Sara', 'Klara']
    },
    lastNames: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann'],
    cities: [
      { city: 'Berlin', state: 'Berlin', zips: ['10115','10178','10243'], streets: ['Unter den Linden','Kurfürstendamm','Friedrichstraße','Karl-Marx-Allee','Potsdamer Straße'], districts: ['Mitte','Prenzlauer Berg','Kreuzberg'], areaCode: '030' },
      { city: 'München', state: 'Bayern', zips: ['80331','80333','80469'], streets: ['Maximilianstraße','Leopoldstraße','Marienplatz','Kaufingerstraße','Nymphenburger Straße'], districts: ['Altstadt','Schwabing','Maxvorstadt'], areaCode: '089' },
      { city: 'Hamburg', state: 'Hamburg', zips: ['20095','20144','20357'], streets: ['Mönckebergstraße','Jungfernstieg','Reeperbahn','Eppendorfer Baum','Wandsbeker Marktstraße'], districts: ['Altstadt','Eimsbüttel','Eppendorf'], areaCode: '040' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Germany`,
    idLabel: 'Personalausweis',
    idFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let id = '';
      for (let i = 0; i < 4; i++) id += letters[rand(0, letters.length-1)];
      id += rand(100000000, 999999999);
      return id;
    },
    salaryRange: [2500, 9000],
  },
  FR: {
    name: '法国',
    flag: '🇫🇷',
    code: 'FR',
    phoneCode: '+33',
    currency: '€',
    phoneFormat: () => `+33 ${rand(1, 9)} ${rand(10, 99)} ${rand(10, 99)} ${rand(10, 99)} ${rand(10, 99)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Gabriel', 'Léo', 'Raphaël', 'Louis', 'Hugo', 'Arthur', 'Thomas', 'Théo', 'Lucas', 'Mathis', 'Noah', 'Liam', 'Antoine', 'Clément', 'Julien'],
      female: ['Emma', 'Jade', 'Louise', 'Alice', 'Chloé', 'Inès', 'Léa', 'Manon', 'Camille', 'Zoé', 'Sarah', 'Lucie', 'Pauline', 'Julie', 'Charlotte']
    },
    lastNames: ['Martin', 'Bernard', 'Robert', 'Richard', 'Durand', 'Dubois', 'Moreau', 'Laurent', 'Simon', 'Michel', 'Lefebvre', 'Leroy', 'Roux', 'David', 'Bertrand', 'Morel', 'Fournier', 'Girard', 'Bonnet', 'Dupont'],
    cities: [
      { city: 'Paris', state: 'Île-de-France', zips: ['75001','75008','75016'], streets: ['Avenue des Champs-Élysées','Rue de Rivoli','Boulevard Haussmann','Rue de la Paix','Avenue Montaigne'], districts: ['1er arrondissement','8e arrondissement','16e arrondissement'], areaCode: '01' },
      { city: 'Lyon', state: 'Auvergne-Rhône-Alpes', zips: ['69001','69002','69003'], streets: ['Rue de la République','Place Bellecour','Quai des Célestins','Cours Lafayette','Rue Mercière'], districts: ["Presqu'île",'Vieux-Lyon','Part-Dieu'], areaCode: '04' },
      { city: 'Marseille', state: "Provence-Alpes-Côte d'Azur", zips: ['13001','13002','13008'], streets: ['La Canebière','Rue de Rome','Avenue du Prado','Boulevard Longchamp','Cours Julien'], districts: ['Le Panier','Noailles','Vieux-Port'], areaCode: '04' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${zip} ${city}, France`,
    idLabel: 'Numéro de Sécurité Sociale',
    idFormat: () => {
      const sex = rand(1, 2);
      const year = rand(60, 99);
      const month = String(rand(1, 12)).padStart(2, '0');
      const dept = String(rand(1, 95)).padStart(2, '0');
      const com = String(rand(1, 99)).padStart(3, '0');
      const ord = String(rand(1, 999)).padStart(3, '0');
      const key = String(rand(1, 99)).padStart(2, '0');
      return `${sex} ${year} ${month} ${dept} ${com} ${ord} ${key}`;
    },
    salaryRange: [2000, 8000],
  },
  AU: {
    name: '澳大利亚',
    flag: '🇦🇺',
    code: 'AU',
    phoneCode: '+61',
    currency: 'A$',
    phoneFormat: () => `+61 ${rand(400, 499)} ${rand(100, 999)} ${rand(100, 999)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Oliver', 'William', 'Jack', 'Noah', 'Thomas', 'Liam', 'Ethan', 'James', 'Lucas', 'Cooper', 'Alexander', 'Mason', 'Henry', 'Samuel', 'Benjamin'],
      female: ['Olivia', 'Charlotte', 'Ava', 'Mia', 'Amelia', 'Grace', 'Isla', 'Sophie', 'Emily', 'Zoe', 'Ruby', 'Lily', 'Emma', 'Chloe', 'Isabella']
    },
    lastNames: ['Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Johnson', 'White', 'Martin', 'Anderson', 'Thompson', 'Nguyen', 'Thomas', 'Walker', 'Harris', 'Lee', 'Ryan', 'Robinson', 'Kelly', 'King'],
    cities: [
      { city: 'Sydney', state: 'NSW', zips: ['2000','2010','2017'], streets: ['George Street','Pitt Street','Market Street','Oxford Street','Military Road'], districts: ['CBD','Surry Hills','Darlinghurst'], areaCode: '02' },
      { city: 'Melbourne', state: 'VIC', zips: ['3000','3004','3008'], streets: ['Collins Street','Bourke Street','Flinders Street','Swanston Street','Chapel Street'], districts: ['CBD','South Yarra','Fitzroy'], areaCode: '03' },
      { city: 'Brisbane', state: 'QLD', zips: ['4000','4101','4169'], streets: ['Queen Street','George Street','Edward Street','Adelaide Street','Brunswick Street'], districts: ['CBD','South Bank','Fortitude Valley'], areaCode: '07' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${state} ${zip}, Australia`,
    idLabel: 'Tax File Number',
    idFormat: () => `${rand(100, 999)} ${rand(100, 999)} ${rand(100, 999)}`,
    salaryRange: [4000, 15000],
  },
  CA: {
    name: '加拿大',
    flag: '🇨🇦',
    code: 'CA',
    phoneCode: '+1',
    currency: 'C$',
    phoneFormat: () => `+1 ${rand(200, 999)} ${rand(200, 999)} ${rand(1000, 9999)}`,
    zipFormat: () => {
      const letters = 'ABCEGHJKLMNPRSTVXY';
      const l = letters[rand(0, letters.length-1)];
      const l2 = 'ABCEFGHJKLMNOPQRSTUVWXYZ'[rand(0, 22)];
      const l3 = 'ABCEFGHJKLMNOPQRSTUVWXYZ'[rand(0, 22)];
      return `${l}${rand(0,9)}${l2} ${rand(0,9)}${l3}${rand(0,9)}`;
    },
    firstNames: {
      male: ['Liam', 'Noah', 'Oliver', 'William', 'Benjamin', 'James', 'Lucas', 'Mason', 'Ethan', 'Alexander', 'Jacob', 'Logan', 'Aiden', 'Jackson', 'Sebastian'],
      female: ['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn', 'Abigail', 'Emily', 'Elizabeth', 'Sofia', 'Ella']
    },
    lastNames: ['Smith', 'Brown', 'Tremblay', 'Martin', 'Roy', 'Wilson', 'MacDonald', 'Taylor', 'Johnson', 'White', 'Anderson', 'Thompson', 'Gagnon', 'Lee', 'Côté', 'Young', 'Scott', 'Hill', 'Moore', 'Clark'],
    cities: [
      { city: 'Toronto', state: 'ON', zips: ['M5A 1A1','M4B 1B3','M6G 3B8'], streets: ['Yonge Street','Bay Street','Bloor Street','Dundas Street','Queen Street West'], districts: ['Downtown','Midtown','The Annex'], areaCode: '416' },
      { city: 'Vancouver', state: 'BC', zips: ['V5K 0A1','V6B 1A1','V6Z 2H3'], streets: ['Granville Street','Robson Street','Hastings Street','Georgia Street','Davie Street'], districts: ['Downtown','Kitsilano','Mount Pleasant'], areaCode: '604' },
      { city: 'Montreal', state: 'QC', zips: ['H2Y 1C6','H3A 0A1','H3G 1T7'], streets: ['Rue Sainte-Catherine','Boulevard Saint-Laurent','Avenue du Parc','Rue Sherbrooke','Avenue du Mont-Royal'], districts: ['Plateau-Mont-Royal','Ville-Marie','Rosemont'], areaCode: '514' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${state} ${zip}, Canada`,
    idLabel: 'SIN',
    idFormat: () => `${rand(100, 999)} ${rand(100, 999)} ${rand(100, 999)}`,
    salaryRange: [3500, 12000],
  },
  IT: {
    name: '意大利',
    flag: '🇮🇹',
    code: 'IT',
    phoneCode: '+39',
    currency: '€',
    phoneFormat: () => `+39 ${rand(300, 399)} ${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Francesco', 'Alessandro', 'Andrea', 'Lorenzo', 'Matteo', 'Davide', 'Gabriele', 'Riccardo', 'Filippo', 'Marco', 'Luca', 'Federico', 'Giovanni', 'Antonio', 'Giuseppe'],
      female: ['Sofia', 'Giulia', 'Aurora', 'Alice', 'Ginevra', 'Emma', 'Chiara', 'Beatrice', 'Martina', 'Eleonora', 'Federica', 'Valentina', 'Sara', 'Francesca', 'Anna']
    },
    lastNames: ['Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno', 'Gallo', 'Conti', 'De Luca', 'Costa', 'Giordano', 'Mancini', 'Rizzo', 'Lombardi', 'Moretti'],
    cities: [
      { city: 'Roma', state: 'Lazio', zips: ['00100','00161','00195'], streets: ['Via Nazionale','Via del Corso','Via Veneto','Via Appia Nuova','Viale Trastevere'], districts: ['Centro Storico','Trastevere','Prati'], areaCode: '06' },
      { city: 'Milano', state: 'Lombardia', zips: ['20100','20121','20135'], streets: ['Corso Buenos Aires','Via Torino','Via Dante','Corso Vittorio Emanuele II','Via Montenapoleone'], districts: ['Duomo','Navigli','Brera'], areaCode: '02' },
      { city: 'Napoli', state: 'Campania', zips: ['80100','80121','80138'], streets: ['Via Toledo','Spaccanapoli','Corso Umberto I','Via Santa Lucia','Via dei Tribunali'], districts: ['Centro Storico','Chiaia','Posillipo'], areaCode: '081' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street}, ${num}, ${zip} ${city}, Italy`,
    idLabel: 'Codice Fiscale',
    idFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let cf = '';
      for (let i = 0; i < 6; i++) cf += letters[rand(0, letters.length-1)];
      cf += rand(10, 99);
      cf += letters[rand(0, letters.length-1)];
      cf += String(rand(1, 31)).padStart(2, '0');
      cf += letters[rand(0, letters.length-1)];
      cf += String(rand(1, 999)).padStart(3, '0');
      cf += letters[rand(0, letters.length-1)];
      return cf;
    },
    salaryRange: [1500, 6000],
  },
  ES: {
    name: '西班牙',
    flag: '🇪🇸',
    code: 'ES',
    phoneCode: '+34',
    currency: '€',
    phoneFormat: () => `+34 ${rand(600, 699)} ${rand(100, 999)} ${rand(100, 999)}`,
    zipFormat: () => String(rand(10000, 52999)),
    firstNames: {
      male: ['Santiago', 'Mateo', 'Sebastián', 'Nicolás', 'Miguel', 'Alejandro', 'Daniel', 'Pablo', 'Lucas', 'Diego', 'Adrián', 'Marcos', 'Álvaro', 'Javier', 'Fernando'],
      female: ['Sofía', 'Valentina', 'Isabella', 'Camila', 'Valeria', 'Lucía', 'Daniela', 'Sara', 'Paula', 'María', 'Carmen', 'Ana', 'Laura', 'Marta', 'Alba']
    },
    lastNames: ['García', 'Martínez', 'López', 'Sánchez', 'González', 'Pérez', 'Rodríguez', 'Fernández', 'Jiménez', 'Díaz', 'Moreno', 'Álvarez', 'Romero', 'Alonso', 'Navarro', 'Torres', 'Domínguez', 'Vázquez', 'Ramos', 'Gil'],
    cities: [
      { city: 'Madrid', state: 'Comunidad de Madrid', zips: ['28001','28010','28013'], streets: ['Gran Vía','Paseo de la Castellana','Calle de Serrano','Calle Mayor','Calle de Alcalá'], districts: ['Centro','Salamanca','Chamberí'], areaCode: '91' },
      { city: 'Barcelona', state: 'Cataluña', zips: ['08001','08010','08036'], streets: ['Paseo de Gracia','Las Ramblas','Avenida Diagonal','Calle de Aragón','Gran Vía de les Corts Catalanes'], districts: ['Eixample','Gràcia','Born'], areaCode: '93' },
      { city: 'Valencia', state: 'Comunidad Valenciana', zips: ['46001','46011','46021'], streets: ['Calle Colón','Avenida del Puerto','Gran Vía Marqués del Turia','Calle de la Paz','Avenida de Aragón'], districts: ["L'Eixample",'Rascanya','Patraix'], areaCode: '96' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Spain`,
    idLabel: 'DNI',
    idFormat: () => {
      const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
      const num = rand(10000000, 99999999);
      return `${num}-${letters[num % 23]}`;
    },
    salaryRange: [1500, 5000],
  },
  BR: {
    name: '巴西',
    flag: '🇧🇷',
    code: 'BR',
    phoneCode: '+55',
    currency: 'R$',
    phoneFormat: () => `+55 ${rand(11, 99)} ${rand(90000, 99999)}-${rand(1000, 9999)}`,
    zipFormat: () => `${String(rand(10000, 99999))}-${String(rand(100, 999))}`,
    firstNames: {
      male: ['Miguel', 'Arthur', 'Heitor', 'Davi', 'Gabriel', 'Pedro', 'Lucas', 'Mateus', 'Bernardo', 'Samuel', 'João', 'Vitor', 'Gustavo', 'Cauã', 'Murilo'],
      female: ['Alice', 'Valentina', 'Sophia', 'Isabella', 'Manuela', 'Júlia', 'Helena', 'Laura', 'Luiza', 'Maria', 'Ana', 'Beatriz', 'Gabriela', 'Rafaela', 'Isabela']
    },
    lastNames: ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Almeida', 'Lopes', 'Sousa', 'Fernandes', 'Vieira', 'Barbosa'],
    cities: [
      { city: 'São Paulo', state: 'SP', zips: ['01310-000','01402-001','04510-010'], streets: ['Avenida Paulista','Rua Oscar Freire','Avenida Brigadeiro Faria Lima','Rua Augusta','Avenida Rebouças'], districts: ['Jardins','Itaim Bibi','Pinheiros'], areaCode: '11' },
      { city: 'Rio de Janeiro', state: 'RJ', zips: ['20040-020','22071-900','22450-040'], streets: ['Avenida Rio Branco','Rua das Laranjeiras','Avenida Nossa Senhora de Copacabana','Rua Visconde de Pirajá','Estrada da Gávea'], districts: ['Copacabana','Ipanema','Centro'], areaCode: '21' },
      { city: 'Brasília', state: 'DF', zips: ['70040-010','70070-010','70200-001'], streets: ['Eixo Monumental','Setor Comercial Sul','Avenida das Nações','Setor Bancário Norte','W3 Sul'], districts: ['Asa Norte','Asa Sul','Lago Sul'], areaCode: '61' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street}, ${num} - ${city}, ${state}, ${zip}, Brazil`,
    idLabel: 'CPF',
    idFormat: () => {
      const p1 = rand(100, 999);
      const p2 = rand(100, 999);
      const p3 = rand(100, 999);
      const p4 = rand(10, 99);
      return `${p1}.${p2}.${p3}-${p4}`;
    },
    salaryRange: [1500, 10000],
  },
  IN: {
    name: '印度',
    flag: '🇮🇳',
    code: 'IN',
    phoneCode: '+91',
    currency: '₹',
    phoneFormat: () => `+91 ${rand(6000, 9999)} ${rand(100000, 999999)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['Aarav', 'Vihaan', 'Arjun', 'Reyansh', 'Vivaan', 'Ansh', 'Dhruv', 'Kabir', 'Ritvik', 'Aaryan', 'Sai', 'Krishna', 'Aryan', 'Ishaan', 'Shaurya'],
      female: ['Saanvi', 'Aadya', 'Kiara', 'Ananya', 'Avni', 'Aadhya', 'Aaradhya', 'Diya', 'Pari', 'Mahi', 'Priya', 'Sneha', 'Pooja', 'Riya', 'Nisha']
    },
    lastNames: ['Sharma', 'Verma', 'Patel', 'Gupta', 'Singh', 'Kumar', 'Yadav', 'Joshi', 'Chauhan', 'Agarwal', 'Mishra', 'Tiwari', 'Pandey', 'Chaudhary', 'Malhotra', 'Mehta', 'Jain', 'Kapoor', 'Bose', 'Roy'],
    cities: [
      { city: 'Mumbai', state: 'Maharashtra', zips: ['400001','400051','400093'], streets: ['Marine Drive','Linking Road','S.V. Road','Andheri Kurla Road','L.B.S. Marg'], districts: ['Colaba','Bandra','Andheri'], areaCode: '022' },
      { city: 'Delhi', state: 'Delhi', zips: ['110001','110006','110019'], streets: ['Connaught Place','Chandni Chowk','Karol Bagh Road','Outer Ring Road','Rohini Road'], districts: ['Connaught Place','Old Delhi','South Delhi'], areaCode: '011' },
      { city: 'Bangalore', state: 'Karnataka', zips: ['560001','560008','560038'], streets: ['MG Road','Brigade Road','Residency Road','Cunningham Road','Lavelle Road'], districts: ['Indiranagar','Koramangala','Whitefield'], areaCode: '080' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num}, ${street}, ${city}, ${state} - ${zip}, India`,
    idLabel: 'Aadhaar',
    idFormat: () => `${rand(1000, 9999)} ${rand(1000, 9999)} ${rand(1000, 9999)}`,
    salaryRange: [20000, 150000],
  },
  RU: {
    name: '俄罗斯',
    flag: '🇷🇺',
    code: 'RU',
    phoneCode: '+7',
    currency: '₽',
    phoneFormat: () => `+7 (${rand(900, 999)}) ${rand(100, 999)}-${rand(10, 99)}-${rand(10, 99)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['Alexander', 'Dmitry', 'Maxim', 'Sergey', 'Andrey', 'Alexey', 'Artyom', 'Ilya', 'Kirill', 'Mikhail', 'Nikita', 'Ivan', 'Roman', 'Vladimir', 'Yegor'],
      female: ['Anastasia', 'Maria', 'Daria', 'Anna', 'Elizaveta', 'Ekaterina', 'Polina', 'Victoria', 'Alina', 'Varvara', 'Ksenia', 'Natalia', 'Nadezhda', 'Tatiana', 'Olga']
    },
    lastNames: ['Ivanov', 'Smirnov', 'Kuznetsov', 'Popov', 'Vasiliev', 'Petrov', 'Sokolov', 'Mikhailov', 'Novikov', 'Fyodorov', 'Morozov', 'Volkov', 'Alexeyev', 'Lebedev', 'Semyonov', 'Yegorov', 'Pavlov', 'Kozlov', 'Stepanov', 'Nikolaev'],
    cities: [
      { city: 'Moscow', state: 'Moscow Oblast', zips: ['101000','105005','125009'], streets: ['Tverskaya Street','Arbat Street','Mira Avenue','Leninsky Prospekt','Sadovaya Street'], districts: ['Central','Northern','Western'], areaCode: '495' },
      { city: 'Saint Petersburg', state: 'Saint Petersburg', zips: ['190000','191011','194100'], streets: ['Nevsky Prospekt','Ligovsky Prospekt','Sadovaya Street','Moskovsky Prospekt','Rubinsteina Street'], districts: ['Central','Admiralteysky','Vasilyevsky'], areaCode: '812' },
      { city: 'Novosibirsk', state: 'Novosibirsk Oblast', zips: ['630001','630049','630099'], streets: ['Lenin Street','Krasny Prospekt','Kirov Street','Marks Prospekt','Sovetskaya Street'], districts: ['Central','Zheleznodorozhny','Zaeltsovsky'], areaCode: '383' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Russia`,
    idLabel: 'SNILS',
    idFormat: () => {
      const p1 = String(rand(100, 999));
      const p2 = String(rand(100, 999));
      const p3 = String(rand(100, 999));
      const p4 = String(rand(10, 99));
      return `${p1}-${p2}-${p3} ${p4}`;
    },
    salaryRange: [30000, 200000],
  },
  MX: {
    name: '墨西哥',
    flag: '🇲🇽',
    code: 'MX',
    phoneCode: '+52',
    currency: '$',
    phoneFormat: () => `+52 ${rand(100, 999)} ${rand(100, 999)} ${rand(1000, 9999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Santiago', 'Mateo', 'Sebastián', 'Leonardo', 'Diego', 'Miguel', 'Ángel', 'Carlos', 'Luis', 'Emilio', 'Rodrigo', 'Alejandro', 'Javier', 'Fernando', 'Andrés'],
      female: ['Sofía', 'Valeria', 'Camila', 'Daniela', 'Isabella', 'Andrea', 'Fernanda', 'Paola', 'María', 'Lucía', 'Gabriela', 'Karen', 'Mariana', 'Ana', 'Natalia']
    },
    lastNames: ['González', 'Rodríguez', 'Martínez', 'García', 'López', 'Hernández', 'Pérez', 'Sánchez', 'Ramírez', 'Torres', 'Flores', 'Rivera', 'Gómez', 'Díaz', 'Cruz', 'Morales', 'Reyes', 'Gutiérrez', 'Ortega', 'Vargas'],
    cities: [
      { city: 'Ciudad de México', state: 'Ciudad de México', zips: ['06600','06700','06010'], streets: ['Av. Insurgentes','Paseo de la Reforma','Av. Presidente Masaryk','Eje Central Lázaro Cárdenas','Av. Chapultepec'], districts: ['Condesa','Polanco','Roma Norte'], areaCode: '55' },
      { city: 'Guadalajara', state: 'Jalisco', zips: ['44100','44200','44600'], streets: ['Av. Juárez','López Cotilla','Av. Vallarta','Av. México','Calzada Independencia'], districts: ['Centro Histórico','Chapultepec','Tlaquepaque'], areaCode: '33' },
      { city: 'Monterrey', state: 'Nuevo León', zips: ['64000','64010','64700'], streets: ['Av. Constitución','Av. Eugenio Garza Sada','Av. Miguel Hidalgo','Calzada del Valle','Av. Gonzalitos'], districts: ['Centro','San Pedro Garza García','Santa Catarina'], areaCode: '81' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${city}, ${state}, CP ${zip}, Mexico`,
    idLabel: 'CURP',
    idFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let curp = '';
      for (let i = 0; i < 4; i++) curp += letters[rand(0, letters.length-1)];
      curp += rand(60, 99);
      const month = String(rand(1, 12)).padStart(2, '0');
      const day = String(rand(1, 28)).padStart(2, '0');
      curp += month + day;
      curp += ['H', 'M'][rand(0, 1)];
      for (let i = 0; i < 2; i++) curp += letters[rand(0, letters.length-1)];
      for (let i = 0; i < 3; i++) curp += letters[rand(0, letters.length-1)];
      curp += letters[rand(0, letters.length-1)] + rand(0, 9);
      return curp;
    },
    salaryRange: [8000, 40000],
  },
  SG: {
    name: '新加坡',
    flag: '🇸🇬',
    code: 'SG',
    phoneCode: '+65',
    currency: 'S$',
    phoneFormat: () => `+65 ${[8, 9][rand(0, 1)]}${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['Ethan', 'Ryan', 'Jayden', 'Lucas', 'Noah', 'Wei Ming', 'Jun Hao', 'Jia Jun', 'Kai', 'Rajan', 'Arjun', 'Vikram', 'Amir', 'Hafiz', 'Zulkifli'],
      female: ['Emma', 'Olivia', 'Ava', 'Mei Ling', 'Xin Yi', 'Yu Ting', 'Priya', 'Deepa', 'Nur', 'Siti', 'Aishah', 'Zara', 'Lily', 'Chloe', 'Mia']
    },
    lastNames: ['Tan', 'Lim', 'Lee', 'Ng', 'Ong', 'Wong', 'Goh', 'Chen', 'Koh', 'Chan', 'Sharma', 'Patel', 'Ahmad', 'Ismail', 'Yusof'],
    cities: [
      { city: 'Singapore', state: 'Central Region', zips: ['048616','059803','178957'], streets: ['Orchard Road','Raffles Place','Marina Bay','Shenton Way','Cecil Street'], districts: ['Orchard','Raffles Place','Marina Bay'], areaCode: '65' },
      { city: 'Tampines', state: 'East Region', zips: ['520001','520102','521521'], streets: ['Tampines Avenue 1','Tampines Street 21','New Upper Changi Road','Simei Street','Bedok North Road'], districts: ['Tampines','Bedok','Simei'], areaCode: '65' },
      { city: 'Jurong East', state: 'West Region', zips: ['600100','640200','640300'], streets: ['Jurong Gateway Road','Boon Lay Way','Toh Guan Road','Corporation Road','Pioneer Road North'], districts: ['Jurong East','Jurong West','Boon Lay'], areaCode: '65' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Singapore`,
    idLabel: 'NRIC',
    idFormat: () => {
      const prefix = ['S', 'T', 'F', 'G'][rand(0, 3)];
      const digits = rand(1000000, 9999999);
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return `${prefix}${digits}${letters[rand(0, letters.length-1)]}`;
    },
    salaryRange: [3000, 15000],
  },
  MY: {
    name: '马来西亚',
    flag: '🇲🇾',
    code: 'MY',
    phoneCode: '+60',
    currency: 'RM',
    phoneFormat: () => `+60 ${[11, 12, 13, 14, 16, 17, 18, 19][rand(0, 7)]}-${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Ahmad', 'Muhammad', 'Haziq', 'Izzat', 'Syafiq', 'Wei Jun', 'Jia Hao', 'Kai Xuan', 'Raj', 'Arjun', 'Vikram', 'Rajan', 'Loke', 'Tan', 'Chong'],
      female: ['Nurul', 'Siti', 'Aisyah', 'Fatimah', 'Nadia', 'Wei Ling', 'Xin Yi', 'Mei Fen', 'Priya', 'Kavitha', 'Shanthi', 'Nisha', 'Asha', 'Lim', 'Wong']
    },
    lastNames: ['bin Abdullah', 'binti Ahmad', 'Tan', 'Lim', 'Wong', 'Lee', 'Ng', 'Ong', 'Chin', 'Chan', 'Kumar', 'Rajan', 'Gopal', 'Singh', 'Kaur'],
    cities: [
      { city: 'Kuala Lumpur', state: 'Kuala Lumpur', zips: ['50000','50088','50450'], streets: ['Jalan Bukit Bintang','Jalan Sultan Ismail','Jalan Ampang','Jalan Imbi','Jalan Pudu'], districts: ['KLCC','Bukit Bintang','Chow Kit'], areaCode: '03' },
      { city: 'George Town', state: 'Pulau Pinang', zips: ['10000','10050','10100'], streets: ['Jalan Penang','Jalan Burma','Jalan Sultan Ahmad Shah','Jalan Macalister','Jalan Tun Abdul Razak'], districts: ['Georgetown','Batu Ferringhi','Air Itam'], areaCode: '04' },
      { city: 'Johor Bahru', state: 'Johor', zips: ['80000','80100','80300'], streets: ['Jalan Wong Ah Fook','Jalan Dato Onn','Jalan Skudai','Jalan Tebrau','Jalan Abdul Samad'], districts: ['Johor Bahru City Centre','Larkin','Tampoi'], areaCode: '07' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num}, ${street}, ${zip} ${city}, Malaysia`,
    idLabel: 'MyKad',
    idFormat: () => {
      const year = rand(60, 99);
      const month = String(rand(1, 12)).padStart(2, '0');
      const day = String(rand(1, 28)).padStart(2, '0');
      const state = String(rand(1, 16)).padStart(2, '0');
      const seq = String(rand(100, 999));
      const gender = rand(1, 9);
      return `${year}${month}${day}-${state}-${seq}${gender}`;
    },
    salaryRange: [2000, 15000],
  },
  TH: {
    name: '泰国',
    flag: '🇹🇭',
    code: 'TH',
    phoneCode: '+66',
    currency: '฿',
    phoneFormat: () => `+66 ${rand(80, 99)}-${rand(100, 999)}-${rand(1000, 9999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Somchai', 'Somsak', 'Wichai', 'Prasit', 'Surachai', 'Thanawat', 'Kittipong', 'Preecha', 'Chaiyaphon', 'Witthaya', 'Nattapong', 'Panya', 'Krit', 'Pongsakorn', 'Theerasak'],
      female: ['Somying', 'Supaporn', 'Rattana', 'Prapa', 'Kanlaya', 'Napaphon', 'Piyanuch', 'Siriporn', 'Wanna', 'Arun', 'Kannika', 'Pornpan', 'Wassana', 'Nanthida', 'Patcharee']
    },
    lastNames: ['Somboon', 'Prasong', 'Wongwan', 'Rungrueang', 'Suksawat', 'Chaichana', 'Phongphat', 'Boonma', 'Jaidee', 'Khongchai', 'Saengmanee', 'Buakaew', 'Phatthanasiri', 'Kitisak', 'Wongsawat'],
    cities: [
      { city: 'Bangkok', state: 'Bangkok', zips: ['10100','10110','10120'], streets: ['Sukhumvit Road','Silom Road','Rama IV Road','Ratchadaphisek Road','Phetchaburi Road'], districts: ['Pathum Wan','Bang Rak','Watthana'], areaCode: '02' },
      { city: 'Chiang Mai', state: 'Chiang Mai', zips: ['50000','50100','50200'], streets: ['Nimman Road','Chang Klan Road','Huay Kaew Road','Wualai Road','Superhighway Road'], districts: ['Mueang','Hang Dong','San Kamphaeng'], areaCode: '053' },
      { city: 'Phuket', state: 'Phuket', zips: ['83000','83100','83130'], streets: ['Thepkrasattri Road','Yaowarat Road','Rat-U-Thit Road','Bangla Road','Thalang Road'], districts: ['Mueang','Kathu','Thalang'], areaCode: '076' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Thailand`,
    idLabel: 'Thai National ID',
    idFormat: () => {
      const p1 = rand(1, 8);
      const p2 = String(rand(1000, 9999));
      const p3 = String(rand(10000, 99999));
      const p4 = String(rand(10, 99));
      const p5 = rand(1, 9);
      return `${p1}-${p2}-${p3}-${p4}-${p5}`;
    },
    salaryRange: [15000, 80000],
  },
  VN: {
    name: '越南',
    flag: '🇻🇳',
    code: 'VN',
    phoneCode: '+84',
    currency: '₫',
    phoneFormat: () => `+84 ${rand(90, 99)}-${rand(100, 999)}-${rand(1000, 9999)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['Minh', 'Hung', 'Duc', 'Tuan', 'Quang', 'Thanh', 'Bao', 'Khoa', 'Nam', 'Long', 'Dung', 'Tung', 'Phuc', 'Anh', 'Viet'],
      female: ['Lan', 'Hoa', 'Linh', 'Thuy', 'Huong', 'Mai', 'Thu', 'Trang', 'Nhung', 'Yen', 'Ngoc', 'Phuong', 'Chau', 'Diem', 'Trinh']
    },
    lastNames: ['Nguyen', 'Tran', 'Le', 'Pham', 'Hoang', 'Phan', 'Vu', 'Dang', 'Bui', 'Do', 'Ho', 'Ngo', 'Duong', 'Ly', 'Dinh'],
    cities: [
      { city: 'Hanoi', state: 'Hanoi', zips: ['100000','115000','116000'], streets: ['Pho Hue','Dinh Tien Hoang Street','Le Loi Street','Phan Dinh Phung Street','Hai Ba Trung Street'], districts: ['Hoan Kiem','Dong Da','Cau Giay'], areaCode: '024' },
      { city: 'Ho Chi Minh City', state: 'Ho Chi Minh City', zips: ['700000','710000','700900'], streets: ['Nguyen Hue Boulevard','Le Loi Street','Dong Khoi Street','Nam Ky Khoi Nghia Street','Hai Ba Trung Street'], districts: ['District 1','District 3','Binh Thanh'], areaCode: '028' },
      { city: 'Da Nang', state: 'Da Nang', zips: ['550000','551000','552000'], streets: ['Tran Phu Street','Nguyen Van Linh Street','2 Thang 9 Street','Dien Bien Phu Street','Nguyen Tat Thanh Street'], districts: ['Hai Chau','Son Tra','Ngu Hanh Son'], areaCode: '0236' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Vietnam`,
    idLabel: 'CCCD',
    idFormat: () => String(rand(100000000000, 999999999999)),
    salaryRange: [5000000, 30000000],
  },
  NL: {
    name: '荷兰',
    flag: '🇳🇱',
    code: 'NL',
    phoneCode: '+31',
    currency: '€',
    phoneFormat: () => `+31 6-${rand(1000, 9999)}-${rand(1000, 9999)}`,
    zipFormat: () => `${rand(1000, 9999)} ${String.fromCharCode(rand(65,90))}${String.fromCharCode(rand(65,90))}`,
    firstNames: {
      male: ['Jan', 'Pieter', 'Willem', 'Hendrik', 'Cornelis', 'Johannes', 'Dirk', 'Gerrit', 'Theodorus', 'Martinus', 'Luuk', 'Daan', 'Finn', 'Sven', 'Lars'],
      female: ['Maria', 'Anna', 'Johanna', 'Elisabeth', 'Cornelia', 'Wilhelmina', 'Hendrika', 'Geertruida', 'Petronella', 'Adriana', 'Emma', 'Lotte', 'Sofie', 'Fleur', 'Lisa']
    },
    lastNames: ['de Jong', 'Jansen', 'de Vries', 'van den Berg', 'van Dijk', 'Bakker', 'Janssen', 'Visser', 'Smit', 'Meijer', 'de Boer', 'Mulder', 'de Groot', 'Bos', 'Vos'],
    cities: [
      { city: 'Amsterdam', state: 'Noord-Holland', zips: ['1012','1013','1015'], streets: ['Damrak','Kalverstraat','Leidsestraat','Prinsengracht','Herengracht'], districts: ['Centrum','De Pijp','Jordaan'], areaCode: '20' },
      { city: 'Rotterdam', state: 'Zuid-Holland', zips: ['3011','3012','3013'], streets: ['Coolsingel','Lijnbaan','Meent','Witte de Withstraat','Nieuwe Binnenweg'], districts: ['Centrum','Delfshaven','Feijenoord'], areaCode: '10' },
      { city: 'Den Haag', state: 'Zuid-Holland', zips: ['2511','2512','2513'], streets: ['Lange Voorhout','Noordeinde','Grote Marktstraat','Spuistraat','Denneweg'], districts: ['Centrum','Scheveningen','Bezuidenhout'], areaCode: '70' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Netherlands`,
    idLabel: 'BSN',
    idFormat: () => String(rand(100000000, 999999999)),
    salaryRange: [2500, 6000],
  },
  TR: {
    name: '土耳其',
    flag: '🇹🇷',
    code: 'TR',
    phoneCode: '+90',
    currency: '₺',
    phoneFormat: () => `+90 5${rand(30, 59)}-${rand(100, 999)}-${rand(1000, 9999)}`,
    zipFormat: () => String(rand(10000, 81999)),
    firstNames: {
      male: ['Mehmet', 'Mustafa', 'Ahmet', 'Ali', 'Hüseyin', 'Hasan', 'İbrahim', 'Ömer', 'Yusuf', 'Murat', 'Emre', 'Burak', 'Serkan', 'Kemal', 'Onur'],
      female: ['Fatma', 'Ayşe', 'Emine', 'Hatice', 'Zeynep', 'Elif', 'Merve', 'Büşra', 'Esra', 'İrem', 'Selin', 'Cemre', 'Özge', 'Gizem', 'Neslihan']
    },
    lastNames: ['Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Çelik', 'Yıldız', 'Yıldırım', 'Öztürk', 'Aydın', 'Özdemir', 'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin'],
    cities: [
      { city: 'Istanbul', state: 'Istanbul', zips: ['34000','34100','34200'], streets: ['İstiklal Caddesi','Bağdat Caddesi','Nişantaşı Caddesi','Divanyolu Caddesi','Cumhuriyet Caddesi'], districts: ['Beyoğlu','Kadıköy','Beşiktaş'], areaCode: '212' },
      { city: 'Ankara', state: 'Ankara', zips: ['06000','06100','06200'], streets: ['Atatürk Bulvarı','Kızılay Meydanı','Tunalı Hilmi Caddesi','Çankaya Caddesi','GMK Bulvarı'], districts: ['Çankaya','Kızılay','Ulus'], areaCode: '312' },
      { city: 'Izmir', state: 'Izmir', zips: ['35000','35100','35200'], streets: ['Kordon Boyu','Kemeraltı Caddesi','Cumhuriyet Bulvarı','Alsancak Caddesi','Şair Eşref Bulvarı'], districts: ['Konak','Bornova','Karşıyaka'], areaCode: '232' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} No:${num}, ${zip} ${city}, Turkey`,
    idLabel: 'TC Kimlik',
    idFormat: () => String(rand(10000000000, 99999999999)),
    salaryRange: [8000, 30000],
  },
  AE: {
    name: '阿联酋',
    flag: '🇦🇪',
    code: 'AE',
    phoneCode: '+971',
    currency: 'AED',
    phoneFormat: () => `+971 5${rand(0,9)}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Mohammed', 'Ahmed', 'Ali', 'Omar', 'Khalid', 'Abdullah', 'Sultan', 'Hamad', 'Saeed', 'Rashid', 'Zayed', 'Majid', 'Tariq', 'Faisal', 'Yousef'],
      female: ['Fatima', 'Maryam', 'Aisha', 'Noura', 'Sara', 'Hessa', 'Shaikha', 'Latifa', 'Reem', 'Maitha', 'Dana', 'Hana', 'Nadia', 'Salma', 'Layla']
    },
    lastNames: ['Al Maktoum', 'Al Nahyan', 'Al Qasimi', 'Al Nuaimi', 'Al Rashidi', 'Al Mansoori', 'Al Hamdan', 'Al Kaabi', 'Al Suwaidi', 'Al Mazrouei', 'Al Falasi', 'Al Zaabi', 'Al Shamsi', 'Al Mulla', 'Al Blooshi'],
    cities: [
      { city: 'Dubai', state: 'Dubai', zips: ['00000','00001','00002'], streets: ['Sheikh Zayed Road','Dubai Mall Boulevard','Jumeirah Beach Road','Al Wasl Road','Business Bay Avenue'], districts: ['Downtown','Marina','Jumeirah'], areaCode: '4' },
      { city: 'Abu Dhabi', state: 'Abu Dhabi', zips: ['00100','00101','00102'], streets: ['Corniche Road','Hamdan Street','Khalifa Street','Airport Road','Al Muroor Road'], districts: ['Al Khalidiyah','Tourist Club','Al Mushrif'], areaCode: '2' },
      { city: 'Sharjah', state: 'Sharjah', zips: ['00200','00201','00202'], streets: ['Al Wahda Street','Al Arouba Road','King Faisal Street','Al Taawun Street','Maliha Road'], districts: ['Al Qasimia','Al Taawun','Al Majaz'], areaCode: '6' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, UAE`,
    idLabel: 'Emirates ID',
    idFormat: () => `784-${rand(1000,9999)}-${rand(1000000,9999999)}-${rand(1,9)}`,
    salaryRange: [5000, 25000],
  },
  PL: {
    name: '波兰',
    flag: '🇵🇱',
    code: 'PL',
    phoneCode: '+48',
    currency: 'zł',
    phoneFormat: () => `+48 ${rand(500,799)}-${rand(100,999)}-${rand(100,999)}`,
    zipFormat: () => `${String(rand(10,99))}-${String(rand(100,999))}`,
    firstNames: {
      male: ['Piotr', 'Krzysztof', 'Andrzej', 'Tomasz', 'Stanisław', 'Marek', 'Jan', 'Paweł', 'Michał', 'Marcin', 'Łukasz', 'Grzegorz', 'Adam', 'Wojciech', 'Rafał'],
      female: ['Anna', 'Maria', 'Katarzyna', 'Małgorzata', 'Agnieszka', 'Krystyna', 'Barbara', 'Ewa', 'Zofia', 'Monika', 'Aleksandra', 'Natalia', 'Joanna', 'Magdalena', 'Karolina']
    },
    lastNames: ['Nowak', 'Kowalski', 'Wiśniewski', 'Dąbrowski', 'Lewandowski', 'Wójcik', 'Kamiński', 'Kowalczyk', 'Zieliński', 'Szymański', 'Woźniak', 'Kozłowski', 'Jankowski', 'Wojciechowski', 'Kwiatkowski'],
    cities: [
      { city: 'Warszawa', state: 'Masovian', zips: ['00-001','00-100','02-001'], streets: ['Nowy Świat','Krakowskie Przedmieście','Marszałkowska','Aleje Jerozolimskie','Chmielna'], districts: ['Śródmieście','Mokotów','Praga-Południe'], areaCode: '22' },
      { city: 'Kraków', state: 'Lesser Poland', zips: ['30-001','31-001','30-500'], streets: ['Floriańska','Grodzka','Długa','Dietla','Starowiślna'], districts: ['Stare Miasto','Kazimierz','Podgórze'], areaCode: '12' },
      { city: 'Wrocław', state: 'Lower Silesian', zips: ['50-001','51-001','53-001'], streets: ['Świdnicka','Oławska','Piłsudskiego','Kazimierza Wielkiego','Ruska'], districts: ['Stare Miasto','Krzyki','Śródmieście'], areaCode: '71' },
    ],
    streetAddress: (num, street, city, zip, state) => `ul. ${street} ${num}, ${zip} ${city}, Poland`,
    idLabel: 'PESEL',
    idFormat: () => String(rand(10000000000, 99999999999)),
    salaryRange: [3000, 12000],
  },
  AR: {
    name: '阿根廷',
    flag: '🇦🇷',
    code: 'AR',
    phoneCode: '+54',
    currency: 'ARS',
    phoneFormat: () => `+54 9 11 ${rand(1000,9999)}-${rand(1000,9999)}`,
    zipFormat: () => `${String.fromCharCode(rand(65,90))}${rand(1000,9999)}${String.fromCharCode(rand(65,90))}${String.fromCharCode(rand(65,90))}${String.fromCharCode(rand(65,90))}`,
    firstNames: {
      male: ['Nicolás', 'Matías', 'Sebastián', 'Lucas', 'Martín', 'Santiago', 'Alejandro', 'Facundo', 'Agustín', 'Tomás', 'Gonzalo', 'Federico', 'Juan', 'Pablo', 'Diego'],
      female: ['Valentina', 'Camila', 'Sofía', 'Martina', 'Florencia', 'Lucía', 'Agustina', 'Melina', 'Natalia', 'Daniela', 'Laura', 'Paula', 'Ana', 'Gabriela', 'Romina']
    },
    lastNames: ['González', 'Rodríguez', 'Gómez', 'Fernández', 'López', 'Díaz', 'Martínez', 'Pérez', 'García', 'Sánchez', 'Romero', 'Sosa', 'Torres', 'Álvarez', 'Ruiz'],
    cities: [
      { city: 'Buenos Aires', state: 'Buenos Aires', zips: ['C1000','C1002','C1004'], streets: ['Avenida de Mayo','Avenida Corrientes','Avenida 9 de Julio','Florida','Lavalle'], districts: ['San Telmo','Palermo','Recoleta'], areaCode: '11' },
      { city: 'Córdoba', state: 'Córdoba', zips: ['X5000','X5003','X5009'], streets: ['Avenida Colón','Bulevar San Juan','Avenida Hipólito Yrigoyen','Calle Obispo Trejo','Deán Funes'], districts: ['Centro','Nueva Córdoba','Alberdi'], areaCode: '351' },
      { city: 'Rosario', state: 'Santa Fe', zips: ['S2000','S2002','S2008'], streets: ['Avenida Pellegrini','Calle Córdoba','Bulevar Oroño','Avenida San Martín','Sarmiento'], districts: ['Centro','República de la Sexta','Echesortu'], areaCode: '341' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${city} ${zip}, Argentina`,
    idLabel: 'DNI',
    idFormat: () => String(rand(10000000, 99999999)),
    salaryRange: [150000, 600000],
  },
  ID: {
    name: '印度尼西亚',
    flag: '🇮🇩',
    code: 'ID',
    phoneCode: '+62',
    currency: 'Rp',
    phoneFormat: () => `+62 8${rand(10,99)}-${rand(1000,9999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(10110, 99999)),
    firstNames: {
      male: ['Budi', 'Agus', 'Eko', 'Hendra', 'Rudi', 'Dian', 'Fajar', 'Rizky', 'Arif', 'Wahyu', 'Dicky', 'Andi', 'Reza', 'Bayu', 'Yoga'],
      female: ['Siti', 'Dewi', 'Rina', 'Sri', 'Wati', 'Yuni', 'Fitri', 'Nurul', 'Indah', 'Ratna', 'Ayu', 'Rini', 'Desi', 'Hana', 'Putri']
    },
    lastNames: ['Santoso', 'Wijaya', 'Kusuma', 'Setiawan', 'Prasetyo', 'Hidayat', 'Nugroho', 'Susanto', 'Wibowo', 'Rahmawati', 'Sari', 'Putra', 'Kurniawan', 'Wahyudi', 'Suryadi'],
    cities: [
      { city: 'Jakarta', state: 'DKI Jakarta', zips: ['10110','10120','10130'], streets: ['Jalan Sudirman','Jalan Thamrin','Jalan Gatot Subroto','Jalan Rasuna Said','Jalan Kuningan'], districts: ['Gambir','Menteng','Kebayoran Baru'], areaCode: '21' },
      { city: 'Surabaya', state: 'East Java', zips: ['60111','60112','60121'], streets: ['Jalan Pemuda','Jalan Basuki Rahmat','Jalan Darmo','Jalan Raya Gubeng','Jalan Urip Sumoharjo'], districts: ['Genteng','Tegalsari','Gubeng'], areaCode: '31' },
      { city: 'Bandung', state: 'West Java', zips: ['40111','40112','40113'], streets: ['Jalan Braga','Jalan Asia Afrika','Jalan Merdeka','Jalan Dago','Jalan Pasteur'], districts: ['Sumur Bandung','Coblong','Cicendo'], areaCode: '22' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} No. ${num}, ${city} ${zip}, Indonesia`,
    idLabel: 'NIK',
    idFormat: () => String(rand(1000000000000000, 9999999999999999)),
    salaryRange: [3000000, 15000000],
  },
  NZ: {
    name: '新西兰',
    flag: '🇳🇿',
    code: 'NZ',
    phoneCode: '+64',
    currency: 'NZ$',
    phoneFormat: () => `+64 2${rand(1,9)}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(1010, 9999)),
    firstNames: {
      male: ['James', 'William', 'Oliver', 'Jack', 'George', 'Charlie', 'Thomas', 'Noah', 'Liam', 'Lucas', 'Ethan', 'Mason', 'Logan', 'Harrison', 'Finn'],
      female: ['Olivia', 'Charlotte', 'Isla', 'Ava', 'Mia', 'Grace', 'Amelia', 'Emma', 'Sophie', 'Lucy', 'Lily', 'Emily', 'Ella', 'Harper', 'Ruby']
    },
    lastNames: ['Smith', 'Jones', 'Williams', 'Brown', 'Taylor', 'Wilson', 'Johnson', 'White', 'Martin', 'Anderson', 'Thompson', 'Clarke', 'Walker', 'Wright', 'Robinson'],
    cities: [
      { city: 'Auckland', state: 'Auckland', zips: ['1010','1011','1021'], streets: ['Queen Street','Ponsonby Road','Karangahape Road','Dominion Road','Great North Road'], districts: ['CBD','Ponsonby','Newmarket'], areaCode: '9' },
      { city: 'Wellington', state: 'Wellington', zips: ['6011','6012','6021'], streets: ['Lambton Quay','Courtenay Place','Cuba Street','Manners Street','Willis Street'], districts: ['CBD','Te Aro','Thorndon'], areaCode: '4' },
      { city: 'Christchurch', state: 'Canterbury', zips: ['8011','8013','8022'], streets: ['Colombo Street','Riccarton Road','Papanui Road','Fitzgerald Avenue','Cashel Street'], districts: ['Central City','Riccarton','Papanui'], areaCode: '3' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, New Zealand`,
    idLabel: 'IRD Number',
    idFormat: () => `${rand(10,99)}-${rand(100,999)}-${rand(100,999)}`,
    salaryRange: [2500, 7000],
  },
  ZA: {
    name: '南非',
    flag: '🇿🇦',
    code: 'ZA',
    phoneCode: '+27',
    currency: 'R',
    phoneFormat: () => `+27 ${rand(60,84)}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Sipho', 'Thabo', 'Lebo', 'Bongani', 'Thabiso', 'Kagiso', 'Luthando', 'Sandile', 'Nhlanhla', 'Siyanda', 'Tshepo', 'Lungelo', 'Sifiso', 'Mthokozisi', 'Sibusiso'],
      female: ['Nomsa', 'Zanele', 'Thandi', 'Lerato', 'Nompumelelo', 'Ayanda', 'Nokukhanya', 'Sizakele', 'Bongiwe', 'Lungile', 'Nosipho', 'Zinhle', 'Nokuthula', 'Ntombi', 'Nolwazi']
    },
    lastNames: ['Nkosi', 'Dlamini', 'Sithole', 'Mahlangu', 'Khumalo', 'Ndlovu', 'Mthembu', 'Ngcobo', 'Mhlongo', 'Bhengu', 'Zulu', 'Xulu', 'Ntanzi', 'Mnguni', 'Khoza'],
    cities: [
      { city: 'Johannesburg', state: 'Gauteng', zips: ['2000','2001','2107'], streets: ['Commissioner Street','Fox Street','Bree Street','Rissik Street','Jeppe Street'], districts: ['CBD','Sandton','Soweto'], areaCode: '11' },
      { city: 'Cape Town', state: 'Western Cape', zips: ['8000','8001','8005'], streets: ['Long Street','Buitenkant Street','Adderley Street','Strand Street','Kloof Street'], districts: ['City Bowl','Gardens','Sea Point'], areaCode: '21' },
      { city: 'Durban', state: 'KwaZulu-Natal', zips: ['4001','4051','4052'], streets: ['West Street','Smith Street','Florida Road','Umgeni Road','Marine Parade'], districts: ['CBD','Berea','Morningside'], areaCode: '31' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${state} ${zip}, South Africa`,
    idLabel: 'SA ID Number',
    idFormat: () => String(rand(7000000000000, 9999999999999)),
    salaryRange: [5000, 30000],
  },
  SE: {
    name: '瑞典',
    flag: '🇸🇪',
    code: 'SE',
    phoneCode: '+46',
    currency: 'kr',
    phoneFormat: () => `+46 7${rand(0,9)}-${rand(100,999)}-${rand(10,99)}-${rand(10,99)}`,
    zipFormat: () => `${rand(100,999)} ${rand(10,99)}`,
    firstNames: {
      male: ['Lars', 'Erik', 'Karl', 'Johan', 'Per', 'Anders', 'Mikael', 'Stefan', 'Björn', 'Peter', 'Andreas', 'Jonas', 'Daniel', 'Mattias', 'Niklas'],
      female: ['Anna', 'Eva', 'Maria', 'Karin', 'Sara', 'Emma', 'Lena', 'Kristina', 'Ingrid', 'Malin', 'Johanna', 'Sofia', 'Linda', 'Camilla', 'Helena']
    },
    lastNames: ['Johansson', 'Andersson', 'Karlsson', 'Nilsson', 'Eriksson', 'Larsson', 'Olsson', 'Persson', 'Svensson', 'Gustafsson', 'Pettersson', 'Jonsson', 'Jansson', 'Hansson', 'Bengtsson'],
    cities: [
      { city: 'Stockholm', state: 'Stockholm', zips: ['111 20','114 26','116 20'], streets: ['Drottninggatan','Kungsgatan','Strandvägen','Götgatan','Birger Jarlsgatan'], districts: ['Norrmalm','Södermalm','Östermalm'], areaCode: '8' },
      { city: 'Göteborg', state: 'Västra Götaland', zips: ['411 01','413 01','414 63'], streets: ['Avenyn','Kungsportsavenyn','Kungsgatan','Vasagatan','Östra Hamngatan'], districts: ['Centrum','Majorna','Haga'], areaCode: '31' },
      { city: 'Malmö', state: 'Skåne', zips: ['211 11','214 23','215 68'], streets: ['Södergatan','Stortorget','Drottninggatan','Amiralsgatan','Davidshallsgatan'], districts: ['Centrum','Husie','Limhamn'], areaCode: '40' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Sweden`,
    idLabel: 'Personnummer',
    idFormat: () => `${rand(19,20)}${String(rand(0,99)).padStart(2,'0')}${String(rand(1,12)).padStart(2,'0')}${String(rand(1,28)).padStart(2,'0')}-${rand(1000,9999)}`,
    salaryRange: [25000, 60000],
  },
  CH: {
    name: '瑞士',
    flag: '🇨🇭',
    code: 'CH',
    phoneCode: '+41',
    currency: 'CHF',
    phoneFormat: () => `+41 7${rand(5,9)}-${rand(100,999)}-${rand(10,99)}-${rand(10,99)}`,
    zipFormat: () => String(rand(1000, 9658)),
    firstNames: {
      male: ['Hans', 'Peter', 'Thomas', 'Andreas', 'Martin', 'Markus', 'Daniel', 'Stefan', 'Urs', 'Beat', 'Michael', 'Christian', 'Patrick', 'David', 'Nicolas'],
      female: ['Anna', 'Maria', 'Elisabeth', 'Sandra', 'Nicole', 'Christine', 'Laura', 'Sarah', 'Claudia', 'Monika', 'Julia', 'Karin', 'Barbara', 'Sabine', 'Katharina']
    },
    lastNames: ['Müller', 'Meier', 'Schmid', 'Keller', 'Weber', 'Huber', 'Schneider', 'Meyer', 'Steiner', 'Fischer', 'Gerber', 'Zimmermann', 'Brunner', 'Widmer', 'Lehmann'],
    cities: [
      { city: 'Zürich', state: 'Zürich', zips: ['8001','8002','8003'], streets: ['Bahnhofstrasse','Langstrasse','Limmatquai','Rämistrasse','Zähringerstrasse'], districts: ['Altstadt','Wiedikon','Oerlikon'], areaCode: '44' },
      { city: 'Genève', state: 'Genève', zips: ['1201','1202','1204'], streets: ['Rue du Rhône','Rue de Rive','Boulevard du Pont-d\'Arve','Rue de la Croix-d\'Or','Rue du Marché'], districts: ['Eaux-Vives','Plainpalais','Jonction'], areaCode: '22' },
      { city: 'Bern', state: 'Bern', zips: ['3001','3006','3007'], streets: ['Marktgasse','Kramgasse','Spitalgasse','Aarbergergasse','Bundesgasse'], districts: ['Altstadt','Länggasse','Bümpliz'], areaCode: '31' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Switzerland`,
    idLabel: 'AHV-Nummer',
    idFormat: () => `756.${rand(1000,9999)}.${rand(1000,9999)}.${rand(10,99)}`,
    salaryRange: [5000, 12000],
  },
  IL: {
    name: '以色列',
    flag: '🇮🇱',
    code: 'IL',
    phoneCode: '+972',
    currency: '₪',
    phoneFormat: () => `+972 ${[50,52,53,54,55,58][rand(0,5)]}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(1000000, 9999999)),
    firstNames: {
      male: ['Noam', 'David', 'Avi', 'Moshe', 'Yosef', 'Itai', 'Eyal', 'Roi', 'Nir', 'Amir', 'Ariel', 'Shai', 'Or', 'Gal', 'Yonatan'],
      female: ['Tamar', 'Noa', 'Maya', 'Shira', 'Michal', 'Yael', 'Rina', 'Dana', 'Liora', 'Tali', 'Ori', 'Gali', 'Sivan', 'Keren', 'Inbar']
    },
    lastNames: ['Cohen', 'Levi', 'Mizrahi', 'Peretz', 'Biton', 'Dahan', 'Gabay', 'Friedman', 'Shapiro', 'Katz', 'Goldberg', 'Ben-David', 'Azoulay', 'Malka', 'Amar'],
    cities: [
      { city: 'Tel Aviv', state: 'Tel Aviv District', zips: ['6120101','6201001','6209201'], streets: ['Dizengoff Street','Ben Yehuda Street','Rothschild Boulevard','Allenby Street','Ibn Gabirol Street'], districts: ['Center','North','South'], areaCode: '03' },
      { city: 'Jerusalem', state: 'Jerusalem District', zips: ['9100101','9143204','9421701'], streets: ['Jaffa Street','King George Street','Ben Yehuda Street','Emek Refaim Street','Hebron Road'], districts: ['City Center','German Colony','Rechavia'], areaCode: '02' },
      { city: 'Haifa', state: 'Haifa District', zips: ['3301602','3308007','3435201'], streets: ['Herzl Street','Ben Gurion Boulevard','HaNassi Boulevard','Sderot HaNadiv','Moriya Avenue'], districts: ['Hadar','Carmel','Downtown'], areaCode: '04' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, Israel`,
    idLabel: 'Teudat Zehut',
    idFormat: () => String(rand(100000000, 999999999)),
    salaryRange: [8000, 25000],
  },
  EG: {
    name: '埃及',
    flag: '🇪🇬',
    code: 'EG',
    phoneCode: '+20',
    currency: 'EGP',
    phoneFormat: () => `+20 1${[0,1,2,5][rand(0,3)]}${rand(10000000, 99999999)}`,
    zipFormat: () => String(rand(11111, 56999)),
    firstNames: {
      male: ['Mohamed', 'Ahmed', 'Mahmoud', 'Ibrahim', 'Ali', 'Hassan', 'Omar', 'Khaled', 'Kareem', 'Tarek', 'Amr', 'Hani', 'Walid', 'Sherif', 'Mostafa'],
      female: ['Fatima', 'Mariam', 'Nour', 'Sara', 'Aya', 'Mona', 'Rania', 'Dina', 'Heba', 'Noha', 'Amira', 'Yasmine', 'Hana', 'Eman', 'Asmaa']
    },
    lastNames: ['Hassan', 'Ibrahim', 'Mohamed', 'Ali', 'Ahmed', 'Mahmoud', 'Khalil', 'Mansour', 'Saad', 'Abdel-Rahman', 'El-Sayed', 'Morsi', 'Fahmy', 'Salah', 'Mostafa'],
    cities: [
      { city: 'Cairo', state: 'Cairo Governorate', zips: ['11511','11514','11311'], streets: ['Qasr Al-Aini Street','Ramses Street','Corniche El-Nil','Salah Salem Road','El Tahrir Square'], districts: ['Zamalek','Downtown','Heliopolis'], areaCode: '02' },
      { city: 'Alexandria', state: 'Alexandria Governorate', zips: ['21111','21131','21521'], streets: ['Corniche Road','El-Hurriya Road','Port Said Street','Gamal Abdel Nasser Street','25 July Street'], districts: ['Montazah','Sidi Bishr','Stanley'], areaCode: '03' },
      { city: 'Giza', state: 'Giza Governorate', zips: ['12511','12571','12621'], streets: ['Pyramids Road','Sudan Street','Faisal Street','Haram Street','Al-Ahram Street'], districts: ['Dokki','Agouza','Mohandessin'], areaCode: '02' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Egypt`,
    idLabel: 'National ID',
    idFormat: () => String(rand(10000000000000, 99999999999999)),
    salaryRange: [3000, 15000],
  },
  NG: {
    name: '尼日利亚',
    flag: '🇳🇬',
    code: 'NG',
    phoneCode: '+234',
    currency: '₦',
    phoneFormat: () => `+234 ${[803,806,810,813,814,816,903,906][rand(0,7)]}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => String(rand(100001, 999999)),
    firstNames: {
      male: ['Emeka', 'Chidi', 'Tunde', 'Seun', 'Biodun', 'Chinedu', 'Oluwasegun', 'Adebayo', 'Nnamdi', 'Ike', 'Obinna', 'Kelechi', 'Sola', 'Gbenga', 'Tobi'],
      female: ['Ngozi', 'Amaka', 'Bimpe', 'Chioma', 'Adaeze', 'Tolani', 'Taiwo', 'Yetunde', 'Funmi', 'Bukola', 'Ifeoma', 'Chinwe', 'Nneka', 'Chiamaka', 'Folake']
    },
    lastNames: ['Okafor', 'Adeyemi', 'Okonkwo', 'Babatunde', 'Nwosu', 'Adeleke', 'Eze', 'Obi', 'Adesanya', 'Nwankwo', 'Chukwu', 'Bello', 'Olawale', 'Ogbonna', 'Dike'],
    cities: [
      { city: 'Lagos', state: 'Lagos State', zips: ['100001','100002','101001'], streets: ['Broad Street','Adeola Odeku Street','Balogun Market Road','Awolowo Road','Marina Street'], districts: ['Victoria Island','Lagos Island','Ikoyi'], areaCode: '01' },
      { city: 'Abuja', state: 'FCT', zips: ['900001','900002','900211'], streets: ['Constitution Avenue','Nnamdi Azikiwe Way','Ahmadu Bello Way','Independence Avenue','Herbert Macaulay Way'], districts: ['Central Business District','Garki','Wuse'], areaCode: '09' },
      { city: 'Port Harcourt', state: 'Rivers State', zips: ['500001','500002','500003'], streets: ['Aba Road','Rumuola Road','Elelenwo Street','Trans-Amadi Road','GRA Phase 2 Road'], districts: ['GRA','Diobu','Trans-Amadi'], areaCode: '084' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, Nigeria`,
    idLabel: 'NIN',
    idFormat: () => String(rand(10000000000, 99999999999)),
    salaryRange: [50000, 500000],
  },
  CL: {
    name: '智利',
    flag: '🇨🇱',
    code: 'CL',
    phoneCode: '+56',
    currency: 'CLP',
    phoneFormat: () => `+56 9 ${rand(1000,9999)} ${rand(1000,9999)}`,
    zipFormat: () => String(rand(1000000, 9999999)),
    firstNames: {
      male: ['Sebastian', 'Matias', 'Nicolas', 'Alejandro', 'Diego', 'Felipe', 'Ignacio', 'Cristobal', 'Rodrigo', 'Martin', 'Gabriel', 'Tomas', 'Pablo', 'Joaquin', 'Andres'],
      female: ['Valentina', 'Camila', 'Sofia', 'Isidora', 'Javiera', 'Florencia', 'Constanza', 'Catalina', 'Daniela', 'Francisca', 'Martina', 'Antonella', 'Renata', 'Maria', 'Ana']
    },
    lastNames: ['Gonzalez', 'Munoz', 'Rojas', 'Diaz', 'Perez', 'Soto', 'Contreras', 'Silva', 'Martinez', 'Sepulveda', 'Morales', 'Rodriguez', 'Lopez', 'Fuentes', 'Hernandez'],
    cities: [
      { city: 'Santiago', state: 'Santiago Metropolitan', zips: ['8320000','8340593','7500000'], streets: ['Avenida Libertador Bernardo O\'Higgins','Avenida Providencia','Avenida Apoquindo','Avenida Las Condes','Paseo Ahumada'], districts: ['Santiago Centro','Providencia','Las Condes'], areaCode: '2' },
      { city: 'Valparaiso', state: 'Valparaiso Region', zips: ['2340000','2380264','2380000'], streets: ['Avenida Brasil','Avenida Argentina','Condell Street','Pedro Montt Avenue','Errazuriz Avenue'], districts: ['Cerro Alegre','El Plan','Cerro Concepcion'], areaCode: '32' },
      { city: 'Concepcion', state: 'Biobio Region', zips: ['4030000','4040000','4070000'], streets: ['Avenida O\'Higgins','Calle Caupolican','Avenida Chacabuco','Calle Freire','Avenida Los Carrera'], districts: ['Centro','Pedro de Valdivia','Hualpen'], areaCode: '41' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${city}, Chile`,
    idLabel: 'RUT',
    idFormat: () => `${rand(1000000,25999999)}-${rand(0,9)}`,
    salaryRange: [400000, 2000000],
  },
  CO: {
    name: '哥伦比亚',
    flag: '🇨🇴',
    code: 'CO',
    phoneCode: '+57',
    currency: 'COP',
    phoneFormat: () => `+57 ${[310,311,312,313,314,315,316,317,318,319][rand(0,9)]} ${rand(1000000,9999999)}`,
    zipFormat: () => String(rand(110111, 999999)),
    firstNames: {
      male: ['Santiago', 'Juan', 'Alejandro', 'Sebastian', 'Daniel', 'Andres', 'David', 'Felipe', 'Diego', 'Carlos', 'Miguel', 'Luis', 'Cristian', 'Nicolas', 'Camilo'],
      female: ['Valentina', 'Sofia', 'Isabella', 'Camila', 'Daniela', 'Alejandra', 'Maria', 'Natalia', 'Juliana', 'Paola', 'Andrea', 'Sara', 'Manuela', 'Laura', 'Mariana']
    },
    lastNames: ['Garcia', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Perez', 'Sanchez', 'Ramirez', 'Gomez', 'Torres', 'Diaz', 'Vargas', 'Castro', 'Jimenez'],
    cities: [
      { city: 'Bogota', state: 'Bogota D.C.', zips: ['110111','110221','110311'], streets: ['Carrera 7','Avenida El Dorado','Calle 72','Avenida 19','Calle 53'], districts: ['La Candelaria','Chapinero','Suba'], areaCode: '1' },
      { city: 'Medellin', state: 'Antioquia', zips: ['050001','050010','050021'], streets: ['El Poblado Avenue','Carrera 43A','Junin Street','San Juan Avenue','Las Vegas Avenue'], districts: ['El Poblado','Laureles','Belen'], areaCode: '4' },
      { city: 'Cali', state: 'Valle del Cauca', zips: ['760001','760020','760045'], streets: ['Avenida Colombia','Carrera 5','Calle 13','Avenida Roosevelt','Carrera 100'], districts: ['El Centro','San Antonio','Ciudad Jardin'], areaCode: '2' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} #${num}, ${city}, Colombia`,
    idLabel: 'Cedula',
    idFormat: () => String(rand(100000000, 1999999999)),
    salaryRange: [1200000, 6000000],
  },
  PE: {
    name: '秘鲁',
    flag: '🇵🇪',
    code: 'PE',
    phoneCode: '+51',
    currency: 'PEN',
    phoneFormat: () => `+51 9${rand(10,99)}-${rand(100,999)}-${rand(100,999)}`,
    zipFormat: () => String(rand(1, 99999)).padStart(5, '0'),
    firstNames: {
      male: ['Alejandro', 'Luis', 'Carlos', 'Jorge', 'Miguel', 'Pedro', 'Juan', 'Daniel', 'Rodrigo', 'Jose', 'Diego', 'Fernando', 'Ricardo', 'Andres', 'Sebastian'],
      female: ['Valentina', 'Sofia', 'Maria', 'Lucia', 'Camila', 'Daniela', 'Isabella', 'Gabriela', 'Ana', 'Paula', 'Rosa', 'Carmen', 'Adriana', 'Patricia', 'Claudia']
    },
    lastNames: ['Garcia', 'Rodriguez', 'Lopez', 'Martinez', 'Sanchez', 'Flores', 'Huanca', 'Quispe', 'Mamani', 'Condori', 'Vargas', 'Morales', 'Ramos', 'Cruz', 'Torres'],
    cities: [
      { city: 'Lima', state: 'Lima Region', zips: ['15001','15036','15074'], streets: ['Avenida Larco','Jiron de la Union','Avenida Arequipa','Avenida Brasil','Miraflores Boulevard'], districts: ['Miraflores','San Isidro','Barranco'], areaCode: '1' },
      { city: 'Arequipa', state: 'Arequipa Region', zips: ['04001','04002','04003'], streets: ['Mercaderes Street','San Juan de Dios Street','Moral Street','Santa Catalina Street','Alvarez Thomas Avenue'], districts: ['Cercado','Cayma','Mariano Melgar'], areaCode: '54' },
      { city: 'Cusco', state: 'Cusco Region', zips: ['08001','08002','08003'], streets: ['Avenida El Sol','Calle Hatun Rumiyoc','Calle del Medio','Avenida Tupac Amaru','Santa Teresa Street'], districts: ['Cusco','San Sebastian','Wanchaq'], areaCode: '84' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Peru`,
    idLabel: 'DNI',
    idFormat: () => String(rand(10000000, 99999999)),
    salaryRange: [900, 5000],
  },
  IE: {
    name: '爱尔兰',
    flag: '🇮🇪',
    code: 'IE',
    phoneCode: '+353',
    currency: '€',
    phoneFormat: () => `+353 8${rand(0,9)}-${rand(100,999)}-${rand(1000,9999)}`,
    zipFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return `${letters[rand(0,25)]}${rand(10,99)} ${letters[rand(0,25)]}${rand(10,99)}`;
    },
    firstNames: {
      male: ['Liam', 'Conor', 'Sean', 'Patrick', 'James', 'Ryan', 'Jack', 'Niall', 'Cian', 'Oisin', 'Finn', 'Eoin', 'Declan', 'Brendan', 'Kieran'],
      female: ['Aoife', 'Ciara', 'Niamh', 'Siobhan', 'Sinead', 'Aisling', 'Orla', 'Maeve', 'Roisin', 'Caoimhe', 'Emma', 'Sophie', 'Grace', 'Hannah', 'Clodagh']
    },
    lastNames: ['Murphy', 'Kelly', 'O\'Sullivan', 'Walsh', 'Smith', 'O\'Brien', 'Byrne', 'Ryan', 'O\'Connor', 'O\'Neill', 'Doyle', 'McCarthy', 'Gallagher', 'O\'Doherty', 'Kennedy'],
    cities: [
      { city: 'Dublin', state: 'Leinster', zips: ['D01','D02','D04'], streets: ['O\'Connell Street','Grafton Street','Dame Street','Nassau Street','St. Stephen\'s Green'], districts: ['City Centre','Southside','Northside'], areaCode: '01' },
      { city: 'Cork', state: 'Munster', zips: ['T12','T23','T45'], streets: ['Patrick Street','Washington Street','MacCurtain Street','Grand Parade','South Mall'], districts: ['City Centre','Blackpool','Bishopstown'], areaCode: '021' },
      { city: 'Galway', state: 'Connacht', zips: ['H91','H54','H65'], streets: ['Shop Street','High Street','William Street','Dominick Street','Eyre Square'], districts: ['City Centre','Salthill','Knocknacarra'], areaCode: '091' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Ireland`,
    idLabel: 'PPS Number',
    idFormat: () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return `${rand(1000000,9999999)}${letters[rand(0,25)]}${letters[rand(0,25)]}`;
    },
    salaryRange: [2500, 8000],
  },
  PT: {
    name: '葡萄牙',
    flag: '🇵🇹',
    code: 'PT',
    phoneCode: '+351',
    currency: '€',
    phoneFormat: () => `+351 9${[1,2,3,6][rand(0,3)]}${rand(1000000,9999999)}`,
    zipFormat: () => `${rand(1000,9999)}-${String(rand(0,999)).padStart(3,'0')}`,
    firstNames: {
      male: ['Joao', 'Miguel', 'Pedro', 'Andre', 'Ricardo', 'Tiago', 'Luis', 'Rui', 'Nuno', 'Filipe', 'Carlos', 'Jorge', 'Antonio', 'Francisco', 'Goncalo'],
      female: ['Ana', 'Maria', 'Sofia', 'Catarina', 'Ines', 'Mariana', 'Marta', 'Sara', 'Joana', 'Beatriz', 'Patricia', 'Teresa', 'Helena', 'Andreia', 'Rita']
    },
    lastNames: ['Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues', 'Martins', 'Jesus', 'Sousa', 'Fernandes', 'Goncalves', 'Gomes', 'Lopes', 'Marques'],
    cities: [
      { city: 'Lisboa', state: 'Lisboa District', zips: ['1100-001','1200-001','1300-001'], streets: ['Avenida da Liberdade','Rua Augusta','Rua do Ouro','Praca do Comercio','Rua Garrett'], districts: ['Baixa','Chiado','Bairro Alto'], areaCode: '21' },
      { city: 'Porto', state: 'Porto District', zips: ['4000-001','4100-001','4050-001'], streets: ['Rua de Santa Catarina','Avenida dos Aliados','Rua das Flores','Rua do Infante Dom Henrique','Rua 31 de Janeiro'], districts: ['Baixa','Bonfim','Cedofeita'], areaCode: '22' },
      { city: 'Faro', state: 'Faro District', zips: ['8000-001','8000-250','8000-400'], streets: ['Rua de Santo Antonio','Rua Dom Francisco Gomes','Largo do Carmo','Avenida da Republica','Rua Conselheiro Bivar'], districts: ['Centro Historico','Montenegro','Gambelas'], areaCode: '289' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${zip} ${city}, Portugal`,
    idLabel: 'NIF',
    idFormat: () => String(rand(100000000, 999999999)),
    salaryRange: [800, 3000],
  },
  GR: {
    name: '希腊',
    flag: '🇬🇷',
    code: 'GR',
    phoneCode: '+30',
    currency: '€',
    phoneFormat: () => `+30 69${rand(0,9)}${rand(1000000,9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Nikos', 'Giorgos', 'Dimitris', 'Kostas', 'Thanasis', 'Makis', 'Panos', 'Stavros', 'Alexandros', 'Spyros', 'Christos', 'Vasilis', 'Tasos', 'Gianni', 'Petros'],
      female: ['Maria', 'Elena', 'Eleni', 'Christina', 'Anna', 'Katerina', 'Sofia', 'Alexia', 'Stavroula', 'Ioanna', 'Dimitra', 'Nikoleta', 'Despina', 'Irene', 'Antonia']
    },
    lastNames: ['Papadopoulos', 'Papadimitriou', 'Oikonomou', 'Papageorgiou', 'Alexiou', 'Christodoulou', 'Georgiou', 'Ioannou', 'Petrou', 'Stavros', 'Antoniou', 'Nikolaou', 'Andreou', 'Stylianou', 'Demetriou'],
    cities: [
      { city: 'Athens', state: 'Attica', zips: ['10431','10552','11471'], streets: ['Stadiou Street','Ermou Street','Panepistimiou Street','Athinas Street','Voulis Street'], districts: ['Syntagma','Monastiraki','Kolonaki'], areaCode: '21' },
      { city: 'Thessaloniki', state: 'Central Macedonia', zips: ['54621','54622','54630'], streets: ['Tsimiski Street','Egnatia Street','Aristotelous Square','Mitropoleos Street','Nikis Avenue'], districts: ['Centre','Ladadika','Vardaris'], areaCode: '2310' },
      { city: 'Heraklion', state: 'Crete', zips: ['71201','71202','71306'], streets: ['25th August Street','1866 Street','Daidalou Street','Handakos Street','Knossos Avenue'], districts: ['Old Town','Ammoudara','Agia Triada'], areaCode: '2810' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Greece`,
    idLabel: 'AMKA',
    idFormat: () => `${String(rand(1,31)).padStart(2,'0')}${String(rand(1,12)).padStart(2,'0')}${rand(10,99)}${rand(10000,99999)}`,
    salaryRange: [700, 3000],
  },
  UA: {
    name: '乌克兰',
    flag: '🇺🇦',
    code: 'UA',
    phoneCode: '+380',
    currency: '₴',
    phoneFormat: () => `+380 ${[50,63,66,67,68,73,91,93,95,97,98,99][rand(0,11)]}-${rand(100,999)}-${rand(10,99)}-${rand(10,99)}`,
    zipFormat: () => String(rand(1000, 99999)).padStart(5, '0'),
    firstNames: {
      male: ['Oleksandr', 'Mykola', 'Vasyl', 'Ivan', 'Andriy', 'Dmytro', 'Serhiy', 'Volodymyr', 'Artem', 'Bohdan', 'Yaroslav', 'Taras', 'Mykhailo', 'Viktor', 'Roman'],
      female: ['Olena', 'Nataliya', 'Yuliya', 'Oksana', 'Iryna', 'Tetiana', 'Svitlana', 'Mariia', 'Daryna', 'Sofia', 'Anastasiya', 'Kateryna', 'Larysa', 'Lyudmyla', 'Vira']
    },
    lastNames: ['Kovalenko', 'Bondarenko', 'Tkachenko', 'Kravchenko', 'Shevchenko', 'Marchenko', 'Petrenko', 'Melnyk', 'Lysenko', 'Moroz', 'Koval', 'Savchenko', 'Ponomarenko', 'Lazarenko', 'Pavlenko'],
    cities: [
      { city: 'Kyiv', state: 'Kyiv Oblast', zips: ['01001','02000','03150'], streets: ['Khreshchatyk Street','Bohdan Khmelnytsky Street','Velyka Vasylkivska Street','Saksahanskoho Street','Volodymyrska Street'], districts: ['Pecherskyi','Shevchenkivskyi','Holosiivskyi'], areaCode: '44' },
      { city: 'Lviv', state: 'Lviv Oblast', zips: ['79000','79008','79013'], streets: ['Svobody Avenue','Rynok Square','Shevchenko Avenue','Franka Street','Horodotska Street'], districts: ['Halychyna','Sykhiv','Lychakiv'], areaCode: '32' },
      { city: 'Odesa', state: 'Odesa Oblast', zips: ['65000','65012','65023'], streets: ['Derybasivska Street','Prymorsky Boulevard','Kanatna Street','Pushkinska Street','Velyka Arnautska Street'], districts: ['Prymorskyi','Khadjibeyskyi','Malinovskyi'], areaCode: '48' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Ukraine`,
    idLabel: 'IPN',
    idFormat: () => String(rand(1000000000, 9999999999)),
    salaryRange: [8000, 40000],
  },
  SA: {
    name: '沙特阿拉伯',
    flag: '🇸🇦',
    code: 'SA',
    phoneCode: '+966',
    currency: 'SAR',
    phoneFormat: () => `+966 5${rand(0,9)}${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Abdullah', 'Mohammed', 'Ahmed', 'Khalid', 'Omar', 'Ali', 'Ibrahim', 'Sultan', 'Faisal', 'Saud', 'Nawaf', 'Turki', 'Majed', 'Yazeed', 'Bandar'],
      female: ['Fatima', 'Noura', 'Sara', 'Maryam', 'Hessa', 'Reem', 'Lina', 'Nada', 'Abeer', 'Rana', 'Hala', 'Dina', 'Amal', 'Waad', 'Latifa']
    },
    lastNames: ['Al-Qahtani', 'Al-Ghamdi', 'Al-Harbi', 'Al-Shehri', 'Al-Zahrani', 'Al-Otaibi', 'Al-Maliki', 'Al-Omari', 'Al-Rashidi', 'Al-Anazi', 'Al-Dosari', 'Al-Mutairi', 'Al-Shamrani', 'Al-Subaie', 'Al-Ruwaili'],
    cities: [
      { city: 'Riyadh', state: 'Riyadh Region', zips: ['11411','11413','11564'], streets: ['King Fahd Road','Olaya Street','King Abdullah Road','Tahlia Street','Prince Mohammed Bin Salman Road'], districts: ['Al Olaya','Al Malaz','Al Muruj'], areaCode: '11' },
      { city: 'Jeddah', state: 'Makkah Region', zips: ['21411','21422','21432'], streets: ['King Abdul Aziz Road','Palestine Street','Al Andalus Street','Madinah Road','Corniche Road'], districts: ['Al Balad','Al Hamra','Al Rawdah'], areaCode: '12' },
      { city: 'Dammam', state: 'Eastern Province', zips: ['31411','31432','31463'], streets: ['King Saud Street','Prince Mohammed Bin Fahd Road','Al Amir Mohammed Street','Dhahran Street','Al Khobar Road'], districts: ['Al Faisaliah','Al Nakheel','Al Shatea'], areaCode: '13' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Saudi Arabia`,
    idLabel: 'National ID',
    idFormat: () => String(rand(1000000000, 9999999999)),
    salaryRange: [4000, 20000],
  },
  AT: {
    name: '奥地利',
    flag: '🇦🇹',
    code: 'AT',
    phoneCode: '+43',
    currency: '€',
    phoneFormat: () => `+43 ${[1,316,512,662,732,463][rand(0,5)]} ${rand(100000, 9999999)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Alexander', 'Florian', 'Johannes', 'Michael', 'Thomas', 'Andreas', 'Stefan', 'Christoph', 'Daniel', 'Markus', 'Lukas', 'Sebastian', 'Peter', 'Klaus', 'Tobias'],
      female: ['Anna', 'Maria', 'Laura', 'Elisabeth', 'Katharina', 'Sabine', 'Christina', 'Sandra', 'Andrea', 'Julia', 'Monika', 'Birgit', 'Martina', 'Daniela', 'Eva']
    },
    lastNames: ['Müller', 'Wagner', 'Gruber', 'Huber', 'Bauer', 'Steiner', 'Moser', 'Mayer', 'Berger', 'Hofer', 'Schneider', 'Pichler', 'Winkler', 'Schwarz', 'Leitner'],
    cities: [
      { city: 'Vienna', state: 'Vienna', zips: ['1010','1020','1030'], streets: ['Ringstrasse','Mariahilfer Strasse','Kaerntner Strasse','Graben','Operngasse'], districts: ['Innere Stadt','Leopoldstadt','Landstrasse'], areaCode: '1' },
      { city: 'Graz', state: 'Styria', zips: ['8010','8020','8036'], streets: ['Herrengasse','Annenstrasse','Jakoministrasse','Schoenaugasse','Grieskai'], districts: ['Innere Stadt','Geidorf','Lend'], areaCode: '316' },
      { city: 'Salzburg', state: 'Salzburg', zips: ['5020','5023','5026'], streets: ['Getreidegasse','Linzer Gasse','Rainerstrasse','Fuerbergstrasse','Alpenstrasse'], districts: ['Altstadt','Andräviertel','Schallmoos'], areaCode: '662' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Austria`,
    idLabel: 'Sozialversicherungsnummer',
    idFormat: () => `${rand(1000,9999)} ${String(rand(1,28)).padStart(2,'0')}${String(rand(1,12)).padStart(2,'0')}${rand(10,99)}`,
    salaryRange: [2000, 8000],
  },
  BE: {
    name: '比利时',
    flag: '🇧🇪',
    code: 'BE',
    phoneCode: '+32',
    currency: '€',
    phoneFormat: () => `+32 ${[2,3,4,9,470,471,472,473,474,475][rand(0,9)]} ${rand(100000, 9999999)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Lucas', 'Noah', 'Liam', 'Tom', 'Pieter', 'Jan', 'Mathis', 'Arthur', 'Axel', 'Remi', 'Maxime', 'Louis', 'Antoine', 'Victor', 'Julien'],
      female: ['Emma', 'Charlotte', 'Olivia', 'Julie', 'Laura', 'Sophie', 'Elise', 'Marie', 'Camille', 'Ines', 'Clara', 'Nina', 'Lea', 'Amelia', 'Nathalie']
    },
    lastNames: ['Peeters', 'Janssen', 'Maes', 'Jacobs', 'Willems', 'De Backer', 'Stevens', 'Claes', 'Vermeersch', 'Dubois', 'Lambert', 'Simon', 'Dupont', 'Laurent', 'Lecomte'],
    cities: [
      { city: 'Brussels', state: 'Brussels Capital Region', zips: ['1000','1020','1030'], streets: ['Rue de la Loi','Avenue Louise','Boulevard Anspach','Rue Neuve','Place de la Bourse'], districts: ['City Centre','Ixelles','Etterbeek'], areaCode: '2' },
      { city: 'Antwerp', state: 'Antwerp Province', zips: ['2000','2018','2060'], streets: ['Meir','De Keyserlei','Frankrijklei','Leysstraat','Schoenmarkt'], districts: ['Binnenstad','Berchem','Borgerhout'], areaCode: '3' },
      { city: 'Ghent', state: 'East Flanders', zips: ['9000','9030','9040'], streets: ['Veldstraat','Korenmarkt','Langemunt','Woodrow Wilsonplein','Kortrijksesteenweg'], districts: ['Binnenstad','Gentbrugge','Ledeberg'], areaCode: '9' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Belgium`,
    idLabel: 'Rijksregisternummer',
    idFormat: () => {
      const y = rand(60,99); const m = String(rand(1,12)).padStart(2,'0'); const d = String(rand(1,28)).padStart(2,'0');
      return `${y}.${m}.${d}-${rand(100,999)}.${rand(10,99)}`;
    },
    salaryRange: [2200, 8500],
  },
  DK: {
    name: '丹麦',
    flag: '🇩🇰',
    code: 'DK',
    phoneCode: '+45',
    currency: 'DKK',
    phoneFormat: () => `+45 ${rand(20,99)} ${rand(10,99)} ${rand(10,99)} ${rand(10,99)}`,
    zipFormat: () => String(rand(1000, 9990)),
    firstNames: {
      male: ['Magnus', 'Oliver', 'Noah', 'Emil', 'William', 'Mikkel', 'Rasmus', 'Lars', 'Christian', 'Jakob', 'Niels', 'Peter', 'Henrik', 'Thomas', 'Jens'],
      female: ['Emma', 'Sofia', 'Ida', 'Freja', 'Clara', 'Anna', 'Laura', 'Maja', 'Katrine', 'Louise', 'Maria', 'Caroline', 'Sara', 'Mathilde', 'Julie']
    },
    lastNames: ['Nielsen', 'Jensen', 'Hansen', 'Pedersen', 'Andersen', 'Christensen', 'Larsen', 'Sorensen', 'Rasmussen', 'Jorgensen', 'Petersen', 'Madsen', 'Kristensen', 'Olsen', 'Thomsen'],
    cities: [
      { city: 'Copenhagen', state: 'Capital Region', zips: ['1050','1100','1150'], streets: ['Stroget','Nørrebrogade','Amagerbrogade','Vesterbrogade','Osterport'], districts: ['Indre By','Nørrebro','Vesterbro'], areaCode: '33' },
      { city: 'Aarhus', state: 'Central Jutland', zips: ['8000','8200','8210'], streets: ['Ryesgade','Sondergade','Banegardspladsen','Aboulevarden','Frederiks Alle'], districts: ['City Centre','Trøjborg','Aarhus V'], areaCode: '87' },
      { city: 'Odense', state: 'Southern Denmark', zips: ['5000','5200','5250'], streets: ['Vestergade','Kongensgade','Ostergade','Thomas B Thriges Gade','Jernbanegade'], districts: ['City Centre','Odense SV','Odense NE'], areaCode: '65' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Denmark`,
    idLabel: 'CPR Number',
    idFormat: () => {
      const d = String(rand(1,28)).padStart(2,'0'); const m = String(rand(1,12)).padStart(2,'0'); const y = String(rand(50,99));
      return `${d}${m}${y}-${rand(1000,9999)}`;
    },
    salaryRange: [25000, 60000],
  },
  FI: {
    name: '芬兰',
    flag: '🇫🇮',
    code: 'FI',
    phoneCode: '+358',
    currency: '€',
    phoneFormat: () => `+358 ${[40,41,44,45,50][rand(0,4)]} ${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Mikael', 'Juhani', 'Antero', 'Tapani', 'Matti', 'Pekka', 'Timo', 'Kari', 'Juha', 'Antti', 'Jouni', 'Markku', 'Paavo', 'Sakari', 'Heikki'],
      female: ['Maria', 'Helena', 'Tuulikki', 'Anna', 'Anneli', 'Kaarina', 'Maija', 'Liisa', 'Riitta', 'Leena', 'Sirpa', 'Minna', 'Paivi', 'Johanna', 'Kirsi']
    },
    lastNames: ['Virtanen', 'Korhonen', 'Makinen', 'Nieminen', 'Mäkinen', 'Hamalainen', 'Leinonen', 'Heikkinen', 'Koskinen', 'Jarvinen', 'Laitinen', 'Tuominen', 'Saarinen', 'Niemi', 'Rantanen'],
    cities: [
      { city: 'Helsinki', state: 'Uusimaa', zips: ['00100','00200','00500'], streets: ['Mannerheimintie','Aleksanterinkatu','Pohjoisesplanadi','Etelaesplanadi','Unioninkatu'], districts: ['Kluuvi','Eira','Kallio'], areaCode: '9' },
      { city: 'Tampere', state: 'Pirkanmaa', zips: ['33100','33200','33500'], streets: ['Hatanpaan valtatie','Tampellan esplanadi','Lempaalantie','Pispalan valtatie','Nasiannaukio'], districts: ['Keskusta','Tammela','Hervanta'], areaCode: '3' },
      { city: 'Turku', state: 'Southwest Finland', zips: ['20100','20200','20540'], streets: ['Aurakatu','Eerikinkatu','Yliopistonkatu','Humalistonkatu','Linnankatu'], districts: ['Keskusta','Hirvensalo','Maaria'], areaCode: '2' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Finland`,
    idLabel: 'Henkilotunnus',
    idFormat: () => {
      const d = String(rand(1,28)).padStart(2,'0'); const m = String(rand(1,12)).padStart(2,'0'); const y = String(rand(50,99));
      const chars = 'ABCDEFHJKLMNPRSTUVWXY'; const c = chars[rand(0,chars.length-1)];
      return `${d}${m}${y}-${rand(100,999)}${c}`;
    },
    salaryRange: [2000, 7000],
  },
  NO: {
    name: '挪威',
    flag: '🇳🇴',
    code: 'NO',
    phoneCode: '+47',
    currency: 'NOK',
    phoneFormat: () => `+47 ${rand(40,99)} ${rand(10,99)} ${rand(10,99)} ${rand(10,99)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Lars', 'Ole', 'Magnus', 'Erik', 'Kristian', 'Thomas', 'Rune', 'Morten', 'Stian', 'Knut', 'Eirik', 'Torbjorn', 'Geir', 'Sondre', 'Henrik'],
      female: ['Anne', 'Ingrid', 'Kari', 'Maria', 'Eva', 'Silje', 'Hilde', 'Elin', 'Nina', 'Tone', 'Kristine', 'Heidi', 'Lise', 'Marte', 'Astrid']
    },
    lastNames: ['Hansen', 'Johansen', 'Olsen', 'Larsen', 'Andersen', 'Pedersen', 'Nilsen', 'Kristiansen', 'Jensen', 'Karlsen', 'Johnsen', 'Pettersen', 'Eriksen', 'Berg', 'Haugen'],
    cities: [
      { city: 'Oslo', state: 'Oslo', zips: ['0150','0160','0180'], streets: ['Karl Johans gate','Gronland','Bogstadveien','Aker Brygge','Storgata'], districts: ['Sentrum','Grunerlokka','Frogner'], areaCode: '22' },
      { city: 'Bergen', state: 'Vestland', zips: ['5003','5006','5015'], streets: ['Torgallmenningen','Bryggen','Strandkaien','Marken','Nygardsgaten'], districts: ['Sentrum','Bergenhus','Arna'], areaCode: '55' },
      { city: 'Trondheim', state: 'Trondelag', zips: ['7010','7011','7013'], streets: ['Kongens gate','Prinsens gate','Nedre Elvehavn','Munkegata','Olav Tryggvasons gate'], districts: ['Midtbyen','Lerkendal','Strindheim'], areaCode: '73' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Norway`,
    idLabel: 'Personnummer',
    idFormat: () => {
      const d = String(rand(1,28)).padStart(2,'0'); const m = String(rand(1,12)).padStart(2,'0'); const y = String(rand(50,99));
      return `${d}${m}${y}${rand(10000,99999)}`;
    },
    salaryRange: [30000, 80000],
  },
  CZ: {
    name: '捷克',
    flag: '🇨🇿',
    code: 'CZ',
    phoneCode: '+420',
    currency: 'CZK',
    phoneFormat: () => `+420 ${rand(600,799)} ${rand(100,999)} ${rand(100,999)}`,
    zipFormat: () => `${rand(100,799)} ${String(rand(0,99)).padStart(2,'0')}`,
    firstNames: {
      male: ['Jakub', 'Jan', 'Tomas', 'Lukas', 'Ondrej', 'Martin', 'Pavel', 'Petr', 'Filip', 'David', 'Adam', 'Vojtech', 'Marek', 'Michal', 'Radek'],
      female: ['Tereza', 'Marketa', 'Barbora', 'Lucie', 'Jana', 'Eva', 'Petra', 'Katerina', 'Monika', 'Lenka', 'Martina', 'Alena', 'Hana', 'Veronika', 'Ivana']
    },
    lastNames: ['Novak', 'Novakova', 'Svoboda', 'Novotny', 'Dvorak', 'Cerny', 'Blaha', 'Prochazka', 'Kucera', 'Vesely', 'Horak', 'Nemec', 'Marek', 'Pospisil', 'Kralova'],
    cities: [
      { city: 'Prague', state: 'Prague', zips: ['110 00','120 00','130 00'], streets: ['Wenceslas Square','Charles Street','Na Prikope','Parizska Street','Narodni trida'], districts: ['Stare Mesto','Nove Mesto','Mala Strana'], areaCode: '2' },
      { city: 'Brno', state: 'South Moravian Region', zips: ['602 00','603 00','616 00'], streets: ['Masarykova Street','Kounicova Street','Cejl','Dornych','Ceska Street'], districts: ['Brno-stred','Brno-sever','Brno-jih'], areaCode: '5' },
      { city: 'Ostrava', state: 'Moravian-Silesian Region', zips: ['702 00','703 00','708 00'], streets: ['Ul. 28 rijna','Cingrovskeho','Horni namesti','Nadrazni','Milicova'], districts: ['Moravska Ostrava','Vitkovice','Poruba'], areaCode: '59' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Czech Republic`,
    idLabel: 'Rodné číslo',
    idFormat: () => {
      const y = String(rand(50,99)); const m = String(rand(1,12)).padStart(2,'0');
      const d = String(rand(1,28)).padStart(2,'0');
      return `${y}${m}${d}/${rand(100,9999)}`;
    },
    salaryRange: [25000, 80000],
  },
  PK: {
    name: '巴基斯坦',
    flag: '🇵🇰',
    code: 'PK',
    phoneCode: '+92',
    currency: 'PKR',
    phoneFormat: () => `+92 ${[300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,340,341,342,343,344,345,346,347,348,349][rand(0,44)]} ${rand(1000000,9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Muhammad', 'Ahmed', 'Ali', 'Hassan', 'Usman', 'Bilal', 'Imran', 'Adnan', 'Shahid', 'Tariq', 'Salman', 'Faisal', 'Asif', 'Zubair', 'Kashif'],
      female: ['Fatima', 'Ayesha', 'Zainab', 'Sana', 'Hira', 'Nadia', 'Rabia', 'Shazia', 'Saba', 'Amina', 'Kiran', 'Saima', 'Rizwana', 'Uzma', 'Sumera']
    },
    lastNames: ['Khan', 'Ahmed', 'Ali', 'Malik', 'Chaudhry', 'Hussain', 'Akhtar', 'Butt', 'Shah', 'Siddiqui', 'Qureshi', 'Baig', 'Mirza', 'Rana', 'Sheikh'],
    cities: [
      { city: 'Karachi', state: 'Sindh', zips: ['74200','74400','75300'], streets: ['MA Jinnah Road','Shahrah-e-Faisal','Tariq Road','Burns Road','University Road'], districts: ['Saddar','Clifton','PECHS'], areaCode: '21' },
      { city: 'Lahore', state: 'Punjab', zips: ['54000','54400','54600'], streets: ['Mall Road','Gulberg Main Boulevard','Liberty Market Road','Canal Road','Jail Road'], districts: ['Gulberg','Model Town','DHA'], areaCode: '42' },
      { city: 'Islamabad', state: 'Islamabad Capital Territory', zips: ['44000','44010','44050'], streets: ['Jinnah Avenue','Margalla Road','Ataturk Avenue','Constitution Avenue','Khayaban-e-Suharwardy'], districts: ['F-6','F-7','G-8'], areaCode: '51' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Pakistan`,
    idLabel: 'CNIC',
    idFormat: () => `${rand(10000,99999)}-${rand(1000000,9999999)}-${rand(1,9)}`,
    salaryRange: [30000, 150000],
  },
  BD: {
    name: '孟加拉国',
    flag: '🇧🇩',
    code: 'BD',
    phoneCode: '+880',
    currency: 'BDT',
    phoneFormat: () => `+880 1${[3,4,5,6,7,8,9][rand(0,6)]}${rand(10000000, 99999999)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Mohammad', 'Rahman', 'Hasan', 'Karim', 'Islam', 'Hossain', 'Alam', 'Ahmed', 'Sabbir', 'Rafi', 'Nafis', 'Tanvir', 'Fahim', 'Jakir', 'Arif'],
      female: ['Fatema', 'Rina', 'Mitu', 'Nasrin', 'Shahanaz', 'Rima', 'Poly', 'Sadia', 'Nusrat', 'Tamanna', 'Mehjabeen', 'Sumaiya', 'Tania', 'Bristy', 'Mim']
    },
    lastNames: ['Khan', 'Ahmed', 'Hossain', 'Islam', 'Rahman', 'Chowdhury', 'Begum', 'Akter', 'Sultana', 'Miah', 'Uddin', 'Sarker', 'Das', 'Roy', 'Biswas'],
    cities: [
      { city: 'Dhaka', state: 'Dhaka Division', zips: ['1000','1100','1200'], streets: ['Motijheel Avenue','Mirpur Road','Gulshan Avenue','Dhanmondi Road','Uttara Avenue'], districts: ['Motijheel','Gulshan','Dhanmondi'], areaCode: '2' },
      { city: 'Chittagong', state: 'Chattogram Division', zips: ['4000','4100','4200'], streets: ['CDA Avenue','Agrabad Access Road','GEC Circle Road','Jubilee Road','SK Mujib Road'], districts: ['Kotwali','Double Mooring','Pahartali'], areaCode: '31' },
      { city: 'Sylhet', state: 'Sylhet Division', zips: ['3100','3114','3118'], streets: ['Zindabazar Road','Ambarkhana Road','Tilagarh Road','Bondor Bazar Road','Airport Road'], districts: ['Zindabazar','Ambarkhana','Shibganj'], areaCode: '821' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}-${zip}, Bangladesh`,
    idLabel: 'National ID',
    idFormat: () => String(rand(1000000000000, 9999999999999)),
    salaryRange: [15000, 80000],
  },
  KE: {
    name: '肯尼亚',
    flag: '🇰🇪',
    code: 'KE',
    phoneCode: '+254',
    currency: 'KES',
    phoneFormat: () => `+254 ${[700,701,710,711,712,714,720,722,724,726,727,728,729,733,734,735,736,737,738,739,740,741,742,743,745,746,748,757,758,759,768,769,770,771,772,773,774,775,776,777,778,779,790,791,792,793,794,795,796,797,798,799][rand(0,51)]} ${rand(100000,999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['James', 'John', 'Peter', 'Paul', 'David', 'Joseph', 'Michael', 'Samuel', 'Daniel', 'George', 'Patrick', 'Brian', 'Kevin', 'Dennis', 'Simon'],
      female: ['Mary', 'Grace', 'Faith', 'Hope', 'Agnes', 'Rose', 'Jane', 'Mercy', 'Esther', 'Ruth', 'Miriam', 'Christine', 'Joyce', 'Dorothy', 'Catherine']
    },
    lastNames: ['Kamau', 'Omondi', 'Wanjiku', 'Otieno', 'Mwangi', 'Njoroge', 'Odhiambo', 'Mutua', 'Kariuki', 'Gitonga', 'Mbeki', 'Owino', 'Ndung\'u', 'Kiptoo', 'Cheruiyot'],
    cities: [
      { city: 'Nairobi', state: 'Nairobi County', zips: ['00100','00200','00300'], streets: ['Kenyatta Avenue','Uhuru Highway','Mombasa Road','Ngong Road','Thika Superhighway'], districts: ['CBD','Westlands','Karen'], areaCode: '20' },
      { city: 'Mombasa', state: 'Mombasa County', zips: ['80100','80200','80300'], streets: ['Moi Avenue','Nyali Road','Links Road','Jomo Kenyatta Avenue','Haile Selassie Road'], districts: ['Island','Nyali','Likoni'], areaCode: '41' },
      { city: 'Kisumu', state: 'Kisumu County', zips: ['40100','40102','40103'], streets: ['Oginga Odinga Street','Jomo Kenyatta Highway','Omolo Agar Road','Kondele Road','Kakamega Road'], districts: ['CBD','Milimani','Kondele'], areaCode: '57' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Kenya`,
    idLabel: 'National ID',
    idFormat: () => String(rand(10000000, 99999999)),
    salaryRange: [30000, 150000],
  },
  MA: {
    name: '摩洛哥',
    flag: '🇲🇦',
    code: 'MA',
    phoneCode: '+212',
    currency: 'MAD',
    phoneFormat: () => `+212 ${[6,7][rand(0,1)]}${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(10000, 99999)),
    firstNames: {
      male: ['Mohammed', 'Ahmed', 'Youssef', 'Hassan', 'Khalid', 'Ibrahim', 'Omar', 'Rachid', 'Karim', 'Mehdi', 'Tariq', 'Samir', 'Noureddine', 'Amine', 'Soufiane'],
      female: ['Fatima', 'Khadija', 'Zineb', 'Nadia', 'Laila', 'Hanane', 'Maryam', 'Loubna', 'Sara', 'Asmaa', 'Houda', 'Sanaa', 'Widad', 'Samira', 'Malika']
    },
    lastNames: ['Benali', 'Idrissi', 'El Amrani', 'Alaoui', 'Benkirane', 'Chraibi', 'Tazi', 'Berrada', 'Kettani', 'Benbrahim', 'Mernissi', 'Fassi', 'Filali', 'Guessous', 'Lahlou'],
    cities: [
      { city: 'Casablanca', state: 'Grand Casablanca', zips: ['20000','20100','20200'], streets: ['Boulevard Mohammed V','Boulevard Zerktouni','Rue Prince Moulay Abdellah','Avenue Hassan II','Boulevard d\'Anfa'], districts: ['Maarif','Ain Diab','Centre Ville'], areaCode: '522' },
      { city: 'Marrakech', state: 'Marrakech-Safi', zips: ['40000','40100','40200'], streets: ['Avenue Mohammed VI','Rue Bab Agnaou','Boulevard Mohammed Zerktouni','Rue de Yougoslavie','Avenue El Mouahidine'], districts: ['Medina','Gueliz','Hivernage'], areaCode: '524' },
      { city: 'Rabat', state: 'Rabat-Sale', zips: ['10000','10010','10020'], streets: ['Avenue Mohammed V','Avenue Allal Ben Abdallah','Boulevard Hassan II','Rue Patrice Lumumba','Avenue Al Amir Moulay Abdellah'], districts: ['Agdal','Hassan','Centre Ville'], areaCode: '537' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Morocco`,
    idLabel: 'CNIE',
    idFormat: () => `${['A','B','C','D','E','G','H','J','K'][rand(0,8)]}${rand(100000,999999)}`,
    salaryRange: [3000, 15000],
  },
  HU: {
    name: '匈牙利',
    flag: '🇭🇺',
    code: 'HU',
    phoneCode: '+36',
    currency: 'HUF',
    phoneFormat: () => `+36 ${[20,30,31,70][rand(0,3)]} ${rand(100,999)} ${rand(1000,9999)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Balazs', 'Zoltan', 'Gabor', 'Attila', 'Laszlo', 'Peter', 'Tamas', 'Andras', 'Istvan', 'Robert', 'David', 'Bence', 'Marcell', 'Adam', 'Levente'],
      female: ['Anna', 'Eva', 'Katalin', 'Maria', 'Judit', 'Agnes', 'Ildiko', 'Zsuzsanna', 'Eszter', 'Reka', 'Nora', 'Petra', 'Veronika', 'Orsolya', 'Monika']
    },
    lastNames: ['Nagy', 'Kovacs', 'Toth', 'Szabo', 'Horvath', 'Varga', 'Kiss', 'Molnar', 'Nemeth', 'Farkas', 'Balogh', 'Papp', 'Takacs', 'Juhasz', 'Fekete'],
    cities: [
      { city: 'Budapest', state: 'Budapest', zips: ['1011','1051','1061'], streets: ['Andrassy ut','Vaci utca','Rakoczi ut','Kossuth Lajos utca','Bajcsy-Zsilinszky ut'], districts: ['Belvaros','Terezvaros','Erzsebetvaros'], areaCode: '1' },
      { city: 'Debrecen', state: 'Hajdu-Bihar', zips: ['4024','4025','4026'], streets: ['Piac utca','Simonffy utca','Kalvin ter','Hatvan utca','Bem ter'], districts: ['Belvaros','Harsfa utca','Csapokert'], areaCode: '52' },
      { city: 'Szeged', state: 'Csongrad-Csanad', zips: ['6720','6721','6722'], streets: ['Karasz utca','Klauzal ter','Dugonics ter','Tisza Lajos korut','Aradi vertanuk tere'], districts: ['Belvaros','Ujszeged','Rokus'], areaCode: '62' },
    ],
    streetAddress: (num, street, city, zip, state) => `${city}, ${street} ${num}, ${zip}, Hungary`,
    idLabel: 'Personal ID',
    idFormat: () => `${String(rand(100000,999999))}${['A','B','C','D','E','F','G','H'][rand(0,7)]}`,
    salaryRange: [200000, 800000],
  },
  RO: {
    name: '罗马尼亚',
    flag: '🇷🇴',
    code: 'RO',
    phoneCode: '+40',
    currency: 'RON',
    phoneFormat: () => `+40 ${[21,724,744,745,752,754,770,771,774,775,776,777][rand(0,11)]} ${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['Alexandru', 'Andrei', 'Mihai', 'Ioan', 'Gheorghe', 'Cristian', 'Bogdan', 'Stefan', 'Marian', 'Catalin', 'Florin', 'Daniel', 'Adrian', 'Razvan', 'Cosmin'],
      female: ['Maria', 'Elena', 'Ioana', 'Ana', 'Cristina', 'Mihaela', 'Andreea', 'Claudia', 'Laura', 'Diana', 'Alexandra', 'Raluca', 'Larisa', 'Gabriela', 'Simona']
    },
    lastNames: ['Popescu', 'Ionescu', 'Popa', 'Constantin', 'Stan', 'Gheorghe', 'Stoica', 'Marin', 'Dumitru', 'Ene', 'Voicu', 'Diaconu', 'Cristea', 'Mihai', 'Preda'],
    cities: [
      { city: 'Bucharest', state: 'Bucharest', zips: ['010101','020101','030101'], streets: ['Calea Victoriei','Bulevardul Unirii','Bulevardul Regina Elisabeta','Strada Lipscani','Bulevardul Magheru'], districts: ['Sector 1','Sector 2','Sector 3'], areaCode: '21' },
      { city: 'Cluj-Napoca', state: 'Cluj', zips: ['400001','400002','400003'], streets: ['Bulevardul Eroilor','Strada Memorandumului','Calea Dorobantilor','Bulevardul 21 Decembrie 1989','Strada Clinicilor'], districts: ['Centru','Gruia','Manastur'], areaCode: '264' },
      { city: 'Timisoara', state: 'Timis', zips: ['300001','300002','300003'], streets: ['Bulevardul CD Loga','Piata Victoriei','Strada Mercy','Calea Torontalului','Bulevardul Mihai Eminescu'], districts: ['Centru','Fabric','Fratelia'], areaCode: '256' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} nr. ${num}, ${city}, ${zip}, Romania`,
    idLabel: 'CNP',
    idFormat: () => {
      const prefix = [1,2,5,6][rand(0,3)];
      const year = rand(60, 99);
      const month = String(rand(1,12)).padStart(2,'0');
      const day = String(rand(1,28)).padStart(2,'0');
      const county = String(rand(1,46)).padStart(2,'0');
      const seq = String(rand(100,999));
      const check = rand(0,9);
      return `${prefix}${year}${month}${day}${county}${seq}${check}`;
    },
    salaryRange: [2000, 8000],
  },
  HR: {
    name: '克罗地亚',
    flag: '🇭🇷',
    code: 'HR',
    phoneCode: '+385',
    currency: 'EUR',
    phoneFormat: () => `+385 ${[1,91,92,95,98,99][rand(0,5)]} ${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(10000, 59999)),
    firstNames: {
      male: ['Ivan', 'Josip', 'Marko', 'Tomislav', 'Luka', 'Ante', 'Nikola', 'Davor', 'Kresimir', 'Boris', 'Mario', 'Stjepan', 'Petar', 'Domagoj', 'Hrvoje'],
      female: ['Marija', 'Ana', 'Ivana', 'Maja', 'Martina', 'Nina', 'Sandra', 'Petra', 'Kristina', 'Vesna', 'Dijana', 'Renata', 'Tatjana', 'Lana', 'Sonja']
    },
    lastNames: ['Horvat', 'Kovacic', 'Babic', 'Maric', 'Novak', 'Juric', 'Petrovic', 'Blazevic', 'Kovac', 'Tomic', 'Pavlovic', 'Knezevic', 'Vukovic', 'Markovic', 'Bozic'],
    cities: [
      { city: 'Zagreb', state: 'Zagreb County', zips: ['10000','10001','10020'], streets: ['Ilica','Gajeva ulica','Trg bana Jelacica','Varsavska ulica','Petrinjska ulica'], districts: ['Donji Grad','Gornji Grad','Maksimir'], areaCode: '1' },
      { city: 'Split', state: 'Split-Dalmatia', zips: ['21000','21100','21210'], streets: ['Marmontova ulica','Dominisova ulica','Hvarska ulica','Kralja Tomislava','Dioklecijanova ulica'], districts: ['Grad','Meje','Spinut'], areaCode: '21' },
      { city: 'Rijeka', state: 'Primorje-Gorski Kotar', zips: ['51000','51100','51221'], streets: ['Korzo','Splitska ulica','Andrije Medulicica','Riva','Fiumara'], districts: ['Centar','Gornji grad','Kozala'], areaCode: '51' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Croatia`,
    idLabel: 'OIB',
    idFormat: () => String(rand(10000000000, 99999999999)),
    salaryRange: [1000, 4000],
  },
  RS: {
    name: '塞尔维亚',
    flag: '🇷🇸',
    code: 'RS',
    phoneCode: '+381',
    currency: 'RSD',
    phoneFormat: () => `+381 ${[11,21,18,34,60,61,62,63,64,65,66][rand(0,10)]} ${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(11000, 36000)),
    firstNames: {
      male: ['Nikola', 'Marko', 'Stefan', 'Milos', 'Vladimir', 'Aleksandar', 'Djordje', 'Petar', 'Luka', 'Filip', 'Jovan', 'Nenad', 'Zoran', 'Dejan', 'Dragan'],
      female: ['Ana', 'Milica', 'Jelena', 'Ivana', 'Natasa', 'Dragana', 'Biljana', 'Maja', 'Tamara', 'Vesna', 'Kristina', 'Marija', 'Sanja', 'Aleksandra', 'Tijana']
    },
    lastNames: ['Jovanovic', 'Petrovic', 'Nikolic', 'Markovic', 'Djordjevic', 'Stojanovic', 'Ilic', 'Stankovic', 'Paunovic', 'Lazarevic', 'Milovanovic', 'Milosevic', 'Radovanovic', 'Zdravkovic', 'Bogdanovic'],
    cities: [
      { city: 'Belgrade', state: 'Belgrade', zips: ['11000','11010','11050'], streets: ['Knez Mihailova','Terazije','Kralja Milana','Bulevar Kralja Aleksandra','Makenzijeva'], districts: ['Stari Grad','Vracar','Savski Venac'], areaCode: '11' },
      { city: 'Novi Sad', state: 'Vojvodina', zips: ['21000','21101','21131'], streets: ['Bulevar Mihajla Pupina','Zmaj Jovina','Dunavska','Futoski put','Suboticka'], districts: ['Stari Grad','Liman','Satelit'], areaCode: '21' },
      { city: 'Nis', state: 'Nisava District', zips: ['18000','18101','18104'], streets: ['Obrenoviceva','Voja Dimitrijevica','Bulevar Dr Zorana Djindjica','Cara Lazara','Vukova'], districts: ['Mediana','Palilula','Niska Banja'], areaCode: '18' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Serbia`,
    idLabel: 'JMBG',
    idFormat: () => {
      const day = String(rand(1,28)).padStart(2,'0');
      const month = String(rand(1,12)).padStart(2,'0');
      const year = rand(960, 999);
      const region = String(rand(70,99));
      const seq = String(rand(100,999));
      const check = rand(0,9);
      return `${day}${month}${year}${region}${seq}${check}`;
    },
    salaryRange: [50000, 150000],
  },
  SK: {
    name: '斯洛伐克',
    flag: '🇸🇰',
    code: 'SK',
    phoneCode: '+421',
    currency: 'EUR',
    phoneFormat: () => `+421 ${[2,910,911,912,915,918,940,944,948,949][rand(0,9)]} ${rand(1000000, 9999999)}`,
    zipFormat: () => `${rand(100,999)} ${rand(10,99)}`,
    firstNames: {
      male: ['Peter', 'Martin', 'Tomas', 'Marek', 'Lukas', 'Michal', 'Jakub', 'Jan', 'Juraj', 'Patrik', 'Roman', 'Milan', 'Richard', 'Pavol', 'David'],
      female: ['Jana', 'Maria', 'Eva', 'Katarina', 'Lucia', 'Petra', 'Martina', 'Zuzana', 'Andrea', 'Monika', 'Ivana', 'Silvia', 'Alzbeta', 'Kristina', 'Lenka']
    },
    lastNames: ['Novak', 'Horvath', 'Kovac', 'Varga', 'Toth', 'Kral', 'Balaz', 'Lukac', 'Oravec', 'Polak', 'Cernak', 'Klement', 'Minarik', 'Balog', 'Sipos'],
    cities: [
      { city: 'Bratislava', state: 'Bratislava Region', zips: ['811 01','821 01','831 01'], streets: ['Obchodna ulica','Hlavne namestie','Sturova ulica','Safarikovo namestie','Postova ulica'], districts: ['Stare Mesto','Ruzinov','Petrzalka'], areaCode: '2' },
      { city: 'Kosice', state: 'Kosice Region', zips: ['040 01','040 11','040 22'], streets: ['Hlavna ulica','Rooseveltova ulica','Kovacska ulica','Masarykova ulica','Bozeny Nemcovej'], districts: ['Stare Mesto','Juh','Zapad'], areaCode: '55' },
      { city: 'Presov', state: 'Presov Region', zips: ['080 01','080 05','080 06'], streets: ['Hlavna ulica','Jarkovska ulica','Hviezdoslavova ulica','Partizanska ulica','Svermova ulica'], districts: ['Presov I','Presov II','Sekco'], areaCode: '51' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${zip} ${city}, Slovakia`,
    idLabel: 'Rodne cislo',
    idFormat: () => {
      const year = rand(60, 99);
      const month = String(rand(1,12)).padStart(2,'0');
      const day = String(rand(1,28)).padStart(2,'0');
      const seq = String(rand(100,999));
      const check = rand(0,9);
      return `${year}${month}${day}/${seq}${check}`;
    },
    salaryRange: [1000, 4000],
  },
  BG: {
    name: '保加利亚',
    flag: '🇧🇬',
    code: 'BG',
    phoneCode: '+359',
    currency: 'BGN',
    phoneFormat: () => `+359 ${[2,52,54,56,61,62,64,66,68,87,88,89,98,99][rand(0,13)]} ${rand(100000, 9999999)}`,
    zipFormat: () => String(rand(1000, 9999)),
    firstNames: {
      male: ['Ivan', 'Georgi', 'Nikolay', 'Petar', 'Dimitar', 'Stefan', 'Hristo', 'Aleksandar', 'Todor', 'Krasimir', 'Plamen', 'Stoyan', 'Vladimir', 'Martin', 'Valentin'],
      female: ['Maria', 'Elena', 'Ivanka', 'Nadya', 'Petya', 'Galina', 'Anka', 'Daniela', 'Irina', 'Radostina', 'Gergana', 'Veneta', 'Yoana', 'Desislava', 'Kristina']
    },
    lastNames: ['Ivanov', 'Georgiev', 'Petrov', 'Dimitrov', 'Stefanov', 'Nikolov', 'Hristov', 'Popov', 'Marinov', 'Todorov', 'Kolev', 'Stoyanov', 'Botev', 'Levski', 'Borisov'],
    cities: [
      { city: 'Sofia', state: 'Sofia City Province', zips: ['1000','1010','1040'], streets: ['Vitosha Boulevard','Alexander Nevsky Square','Graf Ignatiev Street','Patriarch Evtimiy Boulevard','William Gladstone Street'], districts: ['Oborishte','Lozenets','Serdika'], areaCode: '2' },
      { city: 'Plovdiv', state: 'Plovdiv Province', zips: ['4000','4001','4003'], streets: ['Knyaz Alexander I Street','Gladston Street','Sixth September Street','Ivan Vazov Street','Vasil Aprilov Boulevard'], districts: ['Tsentar','Kamenitsa','Karshiyaka'], areaCode: '32' },
      { city: 'Varna', state: 'Varna Province', zips: ['9000','9001','9002'], streets: ['Slivnitsa Boulevard','Tsar Osvoboditel Boulevard','Vladislav Varnenchik Boulevard','Maria Louisa Boulevard','Primorski Boulevard'], districts: ['Varna Center','Asparuhovo','Primorski'], areaCode: '52' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Bulgaria`,
    idLabel: 'EGN',
    idFormat: () => {
      const year = rand(60, 99);
      const month = String(rand(1,12)).padStart(2,'0');
      const day = String(rand(1,28)).padStart(2,'0');
      const seq = String(rand(100,999));
      const check = rand(0,9);
      return `${year}${month}${day}${seq}${check}`;
    },
    salaryRange: [1500, 6000],
  },
  LT: {
    name: '立陶宛',
    flag: '🇱🇹',
    code: 'LT',
    phoneCode: '+370',
    currency: 'EUR',
    phoneFormat: () => `+370 ${[5,37,41,45,46,460,600,610,620,650,660,670,680,690][rand(0,13)]} ${rand(100000, 9999999)}`,
    zipFormat: () => `LT-${rand(10000, 99999)}`,
    firstNames: {
      male: ['Jonas', 'Tomas', 'Lukas', 'Matas', 'Mantas', 'Andrius', 'Arnas', 'Darius', 'Edvinas', 'Gytis', 'Ignas', 'Julius', 'Karolis', 'Mindaugas', 'Rolandas'],
      female: ['Ausra', 'Birute', 'Daiva', 'Egle', 'Greta', 'Inga', 'Jolanta', 'Kristina', 'Laura', 'Monika', 'Neringa', 'Rasa', 'Simona', 'Vilma', 'Zivile']
    },
    lastNames: ['Kazlauskas', 'Petraitis', 'Jankauskas', 'Stankeviciene', 'Mickeviciene', 'Butkus', 'Paulauskas', 'Valickas', 'Stonkus', 'Grigas', 'Radziunas', 'Kairys', 'Urbonas', 'Zalnierius', 'Tamosiunas'],
    cities: [
      { city: 'Vilnius', state: 'Vilnius County', zips: ['LT-01001','LT-01100','LT-02001'], streets: ['Gedimino prospektas','Pilies gatve','Didzioji gatve','Universiteto gatve','Konstitucijos prospektas'], districts: ['Senamiestis','Uzupis','Naujamiestis'], areaCode: '5' },
      { city: 'Kaunas', state: 'Kaunas County', zips: ['LT-44001','LT-44100','LT-50001'], streets: ['Laisves aleja','Vilniaus gatve','Savanoriai prospektas','Kauno gatve','Giruliai gatve'], districts: ['Centras','Zaliakalnis','Aleksotas'], areaCode: '37' },
      { city: 'Klaipeda', state: 'Klaipeda County', zips: ['LT-91001','LT-92001','LT-93001'], streets: ['Herkaus Manto gatve','Taikos prospektas','Minijos gatve','Liejyklos gatve','Tiltu gatve'], districts: ['Senamiestis','Naujamiestis','Debrecenas'], areaCode: '46' },
    ],
    streetAddress: (num, street, city, zip, state) => `${street} ${num}, ${city} ${zip}, Lithuania`,
    idLabel: 'Asmens kodas',
    idFormat: () => {
      const prefix = [3,4,5,6][rand(0,3)];
      const year = rand(60, 99);
      const month = String(rand(1,12)).padStart(2,'0');
      const day = String(rand(1,28)).padStart(2,'0');
      const seq = String(rand(100,999));
      const check = rand(0,9);
      return `${prefix}${year}${month}${day}${seq}${check}`;
    },
    salaryRange: [1200, 5000],
  },
  GH: {
    name: '加纳',
    flag: '🇬🇭',
    code: 'GH',
    phoneCode: '+233',
    currency: 'GHS',
    phoneFormat: () => `+233 ${[20,23,24,25,26,27,28,29,50,54,55,56,57,59][rand(0,13)]} ${rand(1000000, 9999999)}`,
    zipFormat: () => {
      const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
      const l1 = letters[rand(0, letters.length - 1)];
      const l2 = letters[rand(0, letters.length - 1)];
      return `${l1}${l2}-${rand(100,999)}-${rand(1000,9999)}`;
    },
    firstNames: {
      male: ['Kwame', 'Kwesi', 'Kofi', 'Yaw', 'Kwaku', 'Kojo', 'Kwabena', 'Emmanuel', 'Samuel', 'Daniel', 'Joseph', 'Michael', 'Francis', 'Eric', 'Benjamin'],
      female: ['Akua', 'Ama', 'Abena', 'Afia', 'Akosua', 'Adwoa', 'Afua', 'Grace', 'Abigail', 'Esther', 'Comfort', 'Joyce', 'Priscilla', 'Rebecca', 'Naomi']
    },
    lastNames: ['Mensah', 'Asante', 'Owusu', 'Boateng', 'Adjei', 'Agyei', 'Bediako', 'Darko', 'Frimpong', 'Gyamfi', 'Antwi', 'Appiah', 'Asare', 'Acheampong', 'Bonsu'],
    cities: [
      { city: 'Accra', state: 'Greater Accra', zips: ['GA-031-0001','GA-031-0002','GA-031-0003'], streets: ['Independence Avenue','Cantonments Road','Ring Road Central','Liberation Road','Spintex Road'], districts: ['Accra Central','Osu','Labone'], areaCode: '302' },
      { city: 'Kumasi', state: 'Ashanti Region', zips: ['AK-039-0001','AK-039-0002','AK-039-0003'], streets: ['Harper Road','Osei Tutu Road','Lake Road','Antoa Road','Bantama Road'], districts: ['Bantama','Manhyia','Suame'], areaCode: '322' },
      { city: 'Tamale', state: 'Northern Region', zips: ['NR-005-0001','NR-005-0002','NR-005-0003'], streets: ['Salaga Road','Bolgatanga Road','Kalpohini Road','Hospital Road','Sakasaka Road'], districts: ['Tamale Central','Sagnarigu','Tolon'], areaCode: '371' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city}, ${state}, Ghana`,
    idLabel: 'Ghana Card',
    idFormat: () => `GHA-${rand(100000000, 999999999)}-${rand(1,9)}`,
    salaryRange: [800, 4000],
  },
  KZ: {
    name: '哈萨克斯坦',
    flag: '🇰🇿',
    code: 'KZ',
    phoneCode: '+7',
    currency: 'KZT',
    phoneFormat: () => `+7 ${[700,701,702,705,706,707,708,709,747,750,751,760,761,762,763,764,771,775,776,777,778][rand(0,20)]} ${rand(1000000, 9999999)}`,
    zipFormat: () => String(rand(100000, 999999)),
    firstNames: {
      male: ['Alibek', 'Arman', 'Dauren', 'Erlan', 'Nurlan', 'Serik', 'Aibek', 'Daniyar', 'Ruslan', 'Timur', 'Azamat', 'Bekzat', 'Dias', 'Eldos', 'Farukh'],
      female: ['Ainur', 'Aizat', 'Aliya', 'Dana', 'Dinara', 'Gulsim', 'Kamilla', 'Madina', 'Nazgul', 'Saltanat', 'Saule', 'Tolkyn', 'Venera', 'Zarina', 'Assel']
    },
    lastNames: ['Akhmetov', 'Bekova', 'Dzhaksybekov', 'Esenov', 'Zhaksybekov', 'Kasymov', 'Nurgaliev', 'Seitkali', 'Sultanbekov', 'Tulegenov', 'Umarov', 'Yessenov', 'Abdrakhmanov', 'Baisalova', 'Mukhambetov'],
    cities: [
      { city: 'Almaty', state: 'Almaty', zips: ['050000','050010','050057'], streets: ['Abay Avenue','Al-Farabi Avenue','Furmanov Street','Gogol Street','Rozybakiev Street'], districts: ['Alatau','Almaly','Bostandyk'], areaCode: '727' },
      { city: 'Astana', state: 'Akmola Region', zips: ['010000','010010','010022'], streets: ['Nurzhol Boulevard','Kabanbay Batyr Avenue','Saryarka Avenue','Respublika Avenue','Beibitshilik Street'], districts: ['Almaty','Esil','Saryarka'], areaCode: '717' },
      { city: 'Shymkent', state: 'South Kazakhstan', zips: ['160000','160010','160025'], streets: ['Tauke Khan Avenue','Baydibek bi Street','Dostyk Boulevard','Ryskulov Avenue','Kazakhstan Avenue'], districts: ['Abay','Al-Farabi','Karatau'], areaCode: '725' },
    ],
    streetAddress: (num, street, city, zip, state) => `${num} ${street}, ${city} ${zip}, Kazakhstan`,
    idLabel: 'IIN',
    idFormat: () => {
      const year = rand(60, 99);
      const month = String(rand(1,12)).padStart(2,'0');
      const day = String(rand(1,28)).padStart(2,'0');
      const gender = [1,2][rand(0,1)];
      const seq = String(rand(10000,99999));
      return `${year}${month}${day}${gender}${seq}`;
    },
    salaryRange: [150000, 600000],
  },
};

const OCCUPATIONS = [
  'Software Engineer', 'Data Scientist', 'Product Manager', 'Web Developer', 'Graphic Designer',
  'Marketing Manager', 'Financial Analyst', 'Sales Representative', 'Project Manager', 'HR Specialist',
  'Teacher', 'Nurse', 'Doctor', 'Lawyer', 'Accountant', 'Architect', 'Civil Engineer', 'Electrician',
  'Chef', 'Photographer', 'Journalist', 'Writer', 'Artist', 'Musician', 'Translator',
  'Physical Therapist', 'Pharmacist', 'Dentist', 'Veterinarian', 'Psychologist',
  'Wind Energy Engineer', 'Watch Repairer', 'Biomedical Engineer', 'UX Designer', 'DevOps Engineer',
  'Network Administrator', 'Cybersecurity Analyst', 'Database Administrator', 'QA Engineer', 'Business Analyst'
];

const COMPANIES = [
  'Tech Solutions Inc.', 'Global Services Ltd.', 'Innovation Corp.', 'Digital Ventures', 'Smart Systems LLC',
  'Premier Group', 'Pacific Holdings', 'Metro Industries', 'Apex Technologies', 'Sunrise Enterprises',
  'Blue Ocean Consulting', 'Red Rock Capital', 'Green Valley Farms', 'Star Network', 'Peak Performance Co.',
  'Nexus Software', 'Horizon Media', 'Vortex Analytics', 'Summit Partners', 'Echo Digital'
];

const COMPANY_SIZES = ['1-10', '11-50', '51-200', '201-500', '500-1000', '1000+', '无'];

const EMPLOYMENT_STATUSES = [
  'Full-time work', 'Part-time work', 'Self-employed', 'Freelancer', 'Contract', 'Intern', 'Unemployed', 'Retired'
];

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const OS_LIST = [
  'Windows 10', 'Windows 11', 'macOS Ventura', 'macOS Monterey', 'Ubuntu 22.04', 'macOS Sonoma',
  'Windows 10 Pro', 'macOS Big Sur', 'Fedora Linux 38', 'Debian 12'
];

const EDUCATION_LEVELS = [
  "High school diploma", "Associate's degree", "Bachelor's degree", "Master's degree", "PhD", "Vocational training"
];

const SECURITY_QUESTIONS = [
  "What is your mother's maiden name?",
  "What was the name of your first pet?",
  "What city were you born in?",
  "What was the name of your elementary school?",
  "What is the last 4 of your SSN?",
  "What is your favorite movie?",
  "What street did you grow up on?",
  "What was your childhood nickname?",
  "What is the middle name of your oldest child?",
  "What is the name of the town where your parents met?"
];

const EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com',
  'iubridge.com', 'tempmail.net', 'throwam.com', 'fakeinbox.com', 'mailnull.com',
  'yopmail.com', 'guerrillamail.com', 'trashmail.com', 'sharklasers.com', 'spamgourmet.com'
];

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Safari/605.1.15',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.90 Mobile Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64;) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
];

// Helper random function
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(arr) {
  return arr[rand(0, arr.length - 1)];
}
