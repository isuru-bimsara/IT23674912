const { test, expect } = require("@playwright/test");

const URL = "https://www.swifttranslator.com/";
const INPUT = "textarea";

// Reusable function to get actual Sinhala output
async function getSinhalaTranslation(page, singlishText) {
  await page.goto(URL);

  // Enter Singlish input
  await page.fill(INPUT, singlishText);

  await page.waitForTimeout(6000);

  const fullText = await page.textContent("body");

  const match = fullText.match(/Sinhala\s*([අ-ෆ].+?)(?:🔁|Clear|English)/);

  return match ? match[1].trim() : null;
}

// check and print Pass/Fail
function checkResult(actual, expected, testName) {
  if (actual === expected) {
    console.log(`✅ ${testName} Passed`);
  } else {
    console.log(`❌ ${testName} Failed`);
    console.log("Expected:", expected);
    console.log("Actual  :", actual);
  }
}

// --- Test cases ---

test("Test 1 : Convert a short daily request phrase", async ({ page }) => {
  const singlish = `mata mee paadama kiyala dhenna`;
  const expected = `මට මේ පාඩම කියල දෙන්න`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 1");

  expect(actual).toBe(expected);
});

test("Test 2 : Convert a short daily response phrase", async ({ page }) => {
  const singlish = `mata udhav karanna puluvan oyaata`;
  const expected = `මට උදව් කරන්න පුලුවන් ඔයාට`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 2");

  expect(actual).toBe(expected);
});

test("Test 3 : Convert a short daily quwstion phrase", async ({ page }) => {
  const singlish = `oyaage ammagee nama mokakdha?`;
  const expected = `ඔයාගෙ අම්මගේ නම මොකක්ද?`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 3");

  expect(actual).toBe(expected);
});

test("Test 4 : Convert a compound sentence", async ({ page }) => {
  const singlish = `mama mee vaedee karanavaa, eeth tikak parakku veyi`;
  const expected = `මම මේ වැඩේ කරනවා, ඒත් ටිකක් පරක්කු වෙයි`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 4");

  expect(actual).toBe(expected);
});

test("Test 5 : Convert a complex sentence", async ({ page }) => {
  const singlish = `mata eeka kivvanam mama ee vaedee karan naee`;
  const expected = `මට ඒක කිව්වනම් මම ඒ වැඩේ කරන් නෑ`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 5");

  expect(actual).toBe(expected);
});

test("Test 6 : Convert medium size Singlish+english mixes sentence", async ({
  page,
}) => {
  const singlish = `mama adha office ekata gihillaa havasa pansalata yanavaa`;
  const expected = `මම අද office එකට ගිහිල්ලා හවස පන්සලට යනවා`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 6");

  expect(actual).toBe(expected);
});

test("Test 7 : Convert formal sentence", async ({ page }) => {
  const singlish = `ovuhu raajakaari saDHAhaa pitavagos sitiyooya`;
  const expected = `ඔවුහු රාජකාරි සඳහා පිටවගොස් සිටියෝය`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 7");

  expect(actual).toBe(expected);
});

test("Test 8 : Convert the simglish pharce with place", async ({ page }) => {
  const singlish = `mama adha havasa beach yanavaa`;
  const expected = `මම අද හවස beach යනවා`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 8");

  expect(actual).toBe(expected);
});

test("Test 9 : Convert singlish phrase with numbers", async ({ page }) => {
  const singlish = `karuNaakaraLaa 1929 ta kathaakaranna`;
  const expected = `කරුණාකරළා 1929 ට කතාකරන්න`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 9");

  expect(actual).toBe(expected);
});

test("Test 10 : Convert the Sinhala + English sentences", async ({ page }) => {
  const singlish = `machaQQ mama adha cricket gahanna yanwaa. ee hindha mata meeting ekata enna ven naee. sir ta msg ekak dhaanna kiyanna mata class ekata ennee naee kiyala haridha`;
  const expected = `මචං මම අද cricket ගහන්න යනwආ. ඒ හින්ද මට meeting එකට එන්න වෙන් නෑ. sir ට ම්ස්ග් එකක් දාන්න කියන්න මට class එකට එන්නේ නෑ කියල හරිද`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 10");

  expect(actual).toBe(expected);
});

test("Test 11 : Convert a sentence with punctution", async ({ page }) => {
  const singlish = `oyaa eeka karapu eka mata pudhumayi!`;
  const expected = `ඔයා ඒක කරපු එක මට පුදුමයි!`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 11");

  expect(actual).toBe(expected);
});

test("Test 12 : Convert the present tense", async ({ page }) => {
  const singlish = `Api adha gedhara yamu.`;
  const expected = `අපි අද ගෙදර යමු.`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 12");

  expect(actual).toBe(expected);
});

test("Test 13 : Convert the future sentence", async ({ page }) => {
  const singlish = `Api heta gedhara yannemu.`;
  const expected = `අපි හෙට ගෙදර යන්නෙමු.`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 13");

  expect(actual).toBe(expected);
});

test("Test 14 : Convert the command sentence", async ({ page }) => {
  const singlish = `vhaama gedhara yanna.`;
  const expected = `ව්හාම ගෙදර යන්න.`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 14");

  expect(actual).toBe(expected);
});

test("Test 15 : Convert the negative form", async ({ page }) => {
  const singlish = `mama adha poLata yannee naee.`;
  const expected = `මම අද පොළට යන්නේ නෑ.`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 15");

  expect(actual).toBe(expected);
});

test("Test 16 : Convert the greetings.", async ({ page }) => {
  const singlish = `oyaata dhevi pihitayi!`;
  const expected = `ඔයාට දෙවි පිහිටයි!`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 16");

  expect(actual).toBe(expected);
});

test("Test 17 : Convert the formatting of spaces", async ({ page }) => {
  const singlish = `ohu mata
baena baena niyara dhigee
gedharatama    giyaa`;
  const expected = `ඔහු මට
බැන බැන නියර දිගේ
ගෙදරටම    ගියා`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 17");

  expect(actual).toBe(expected);
});

test("Test 18 : Convert the plural form", async ({ page }) => {
  const singlish = `gas suLagata udhuraa vaeteyi`;
  const expected = `ගස් සුළගට උදුරා වැටෙයි`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 18");

  expect(actual).toBe(expected);
});

test("Test 19 : Convert sentence with person's sinhala name", async ({
  page,
}) => {
  const singlish = `Isuru gamata yana dhavasa adha`;
  const expected = `ඉසුරු ගමට යන දවස අද`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 19");

  expect(actual).toBe(expected);
});

test("Test 20 : Convert the paragraphs with line brakes and spaces", async ({
  page,
}) => {
  const singlish = `Mama adha gedhara yanva havasa. mama bus raThayee thamaa yanne. Mama dhurakaThanayen giitha asamin thamaa yanneee. ikmanin mata gamata yanna puluvan veevi`;
  const expected = `මම අද ගෙදර යන්ව හවස. මම bus රථයේ තමා යන්නෙ. මම දුරකථනයෙන් ගීත අසමින් තමා යන්නේඑ. ඉක්මනින් මට ගමට යන්න පුලුවන් වේවි`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 20");

  expect(actual).toBe(expected);
});

test("Test 21 : Convert sentence with english technical words", async ({
  page,
}) => {
  const singlish = `apee sir adha zoom eken meeting ekak yodhaagena aetha. eya sadhahaa adhaala pdf eka yomukota aetha.`;
  const expected = `අපේ sir අද zoom එකෙන් meeting එකක් යොදාගෙන ඇත. එය සදහා අදාල pdf එක යොමුකොට ඇත.`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 21");

  expect(actual).toBe(expected);
});

test("Test 22 : Convert the sentnce with unit and mesurement", async ({
  page,
}) => {
  const singlish = `mama siini 1kg k aran ennam kaden`;
  const expected = `මම සීනි 1kg ක් අරන් එන්නම් කඩෙන්`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 22");

  expect(actual).toBe(expected);
});

test("Test 23 : Convert the singlish and common english words", async ({
  page,
}) => {
  const singlish = `mama heta udhenma Kandy yanva. dhavalta tea ekak bonavaa`;
  const expected = `මම හෙට උදෙන්ම Kandy යන්ව. දවල්ට tea එකක් බොනවා`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 23");

  expect(actual).toBe(expected);
});

test("Test 24 : Convert the frequent collocations ", async ({ page }) => {
  const singlish = `paandharin aavata paan thaama dhalaa naee`;
  const expected = `පාන්දරින් ආවට පාන් තාම දලා නෑ`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 24");

  expect(actual).toBe(expected);
});

test("Test 25 : Convert the paragraphs", async ({ page }) => {
  const singlish = `Mama adha gedhara yanva havasa. On the way, mama bus ekata naginava. Mama music listen karanava and phone eka check karanava. Street eka hondai, people walking slow-slow. Mama shop ekak pass karala, small snack purchase karanava. Finally, mama home reach vela relax venavaa.

Home eken enter karala, mama shoes remove karanava and bag eka set karanava. Mama kitchen eka yanna and tea prepare karanava. Tea eka ready wela, mama balcony eke sit karala, weather eka enjoy karanava. Sun eka warm, little wind thiyenava, birds chirping karanava. Mama phone eke messages check karanava, few friends whatsapp karanava. One friend ask karanava to meet evening eka, mama agree karanava.

Afternoon eken mama small nap gannava. Nap eken wake wela, mama computer open karanava and favorite YouTube videos balanava. Videos balala, laugh karanava and share karanava few funny clips with friends. Time pass wela, mama hobby books gihin read karanava. Reading karala, mama notes write karanava for upcoming exam, little preparation karanava.

Evening eken mama ready wela, shoes and bag take karanava, bus station yanava. Bus wait karala, few passengers join karanava, conversations hear karanava. Street lights glow karanava, vehicles pass karanava. Mama bus window eken outside view enjoy karanava, children playing in park balanava. Small dogs run around, people waving at each other.

Finally, friend meet karala, restaurant yanava. Restaurant eke seats take karala, menu balanava and order karanava. Drinks and snacks arrive wela, chatting karanava, laugh karanava. Dinner complete wela, photo ekak capture karanava, memories save karanava. Bus eken home return karanava, night city lights glow karanava. Home reach wela, shoes remove karanava, bag place karanava.

Mama room eken sit karala, music play karanava, diary open karala, day ekata summary write karanava. Thoughts, small plans, feelings note karanava. Finally, mama bed yanava, pillow hug karanava, lights off karanava. Mind relax, sleep come smoothly, day eka happy wenava.`;
  const expected = `මම අද ගෙදර යන්ව හවස. On තෙ way, මම bus එකට නගිනව. මම music listen කරනව and phone එක check කරනව. Street එක හොන්ඩෛ, people walking slow-slow. මම shop එකක් pass කරල, small snack purchase කරනව. Finally, මම home reach වෙල relax වෙනවා.

Home එකෙන් enter කරල, මම shoes remove කරනව and bag එක සෙට් කරනව. මම kitchen එක යන්න and tea prepare කරනව. Tea එක ready wඑල, මම balcony eke sit කරල, weather එක enjoy කරනව. සුන් එක warm, little wind තියෙනව, birds chirping කරනව. මම phone eke messages check කරනව, few friends whatsapp කරනව. One friend ask කරනව to මේට් evening එක, මම agree කරනව.

Afternoon එකෙන් මම small nap ගන්නව. Nap එකෙන් wake wඑල, මම computer open කරනව and favorite YouTube videos බලනව. Videos බලල, laugh කරනව and share කරනව few funny clips with friends. Time pass wඑල, මම hobby books ගිහින් read කරනව. Reading කරල, මම notes write කරනව for upcoming exam, little preparation කරනව.

Evening එකෙන් මම ready wඑල, shoes and bag take කරනව, bus station යනව. Bus wait කරල, few passengers join කරනව, conversations hear කරනව. Street lights glow කරනව, vehicles pass කරනව. මම bus window එකෙන් outside view enjoy කරනව, children playing ඉන් park බලනව. Small dogs run around, people waving at each other.

Finally, friend මේට් කරල, restaurant යනව. Restaurant eke seats take කරල, මෙනු බලනව and order කරනව. Drinks and snacks arrive wඑල, chatting කරනව, laugh කරනව. Dinner complete wඑල, photo එකක් capture කරනව, memories save කරනව. Bus එකෙන් home return කරනව, night city lights glow කරනව. Home reach wඑල, shoes remove කරනව, bag place කරනව.

මම room එකෙන් sit කරල, music play කරනව, diary open කරල, day එකට summary write කරනව. Thoughts, small plans, feelings note කරනව. Finally, මම bed යනව, pillow hug කරනව, lights off කරනව. Mind relax, sleep come smoothly, day එක happy wඑනව.`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 25");

  expect(actual).toBe(expected);
});

test("Test 26 : Convert the sentence with pronoun", async ({ page }) => {
  const singlish = `I said, ‘mama eeka kalee naee.’`;
  const expected = `I said, ‘මම ඒක කලේ නෑ.’`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 26");

  expect(actual).toBe(expected);
});

test("Test 27 : Convert Singlish sentence with incorrected keyword", async ({
  page,
}) => {
  const singlish = `mama adha scool yanva adha `;
  const expected = `
මම අද school යනව අද `;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 27");

  expect(actual).toBe(expected);
});

test("Test 28 : Convert Singlish input without a space", async ({ page }) => {
  const singlish = `api adha gedhara gihin teaekak bonavaa`;
  const expected = `අපි අද ගෙදර ගිහින් tea එකක් බොනවා`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 28");

  expect(actual).toBe(expected);
});

test("Test 29 : Convert Singlish input without spaces", async ({ page }) => {
  const singlish = `ovuhupansalvalatayanavaa`;
  const expected = `ඔවුහු පන්සල් වලට යනවා`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 29");

  expect(actual).toBe(expected);
});

test("Test 30 : Convert a full name", async ({ page }) => {
  const singlish = `saman weerasinghe kiyana pudhgalayaa alla ganna`;
  const expected = `සමන් වීරසිංහ කියන පුත්ගලයා අල්ල ගන්න

`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 30");

  expect(actual).toBe(expected);
});

test("Test 31 : Convert incorrect technical words", async ({ page }) => {
  const singlish = `mama ewan pdff eka uhuta whatapp eken yavanna`;
  const expected = `මම එwඅන් pdf එක උහුට whatsapp එකෙන් යවන්න`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 31");

  expect(actual).toBe(expected);
});

test("Test 32 : Convert the date", async ({ page }) => {
  const singlish = `magee upan dhinaya  Juny 20.`;
  const expected = `මගේ උපන් දිනය  Juny 20.`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 32");

  expect(actual).toBe(expected);
});

test("Test 33 : Convert the question with the wrong punctuation mark.", async ({
  page,
}) => {
  const singlish = `oyaa pansalata giyaadha!`;
  const expected = `ඔයා පන්සලට ගියාද?`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 33");

  expect(actual).toBe(expected);
});

test("Test 34 : Convert the incorrect grammar sentence.", async ({ page }) => {
  const singlish = `ovuhu gedhara giyeeya`;
  const expected = `ඔවුහු ගෙදර ගියෝය`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 34");

  expect(actual).toBe(expected);
});

test("Test 35 : Convert the sentence with towns' names", async ({ page }) => {
  const singlish = `They are going to Katupotha town today.`;
  const expected = `They are going to Katupotha town today`;

  const actual = await getSinhalaTranslation(page, singlish);
  checkResult(actual, expected, "Test 35");

  expect(actual).toBe(expected);
});
