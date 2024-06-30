const EXTERNAL_DATA_URL_MYNDIGHET= 'https://myndighetshandboken.se/api/myndigheter';
const EXTERNAL_DATA_URL_COMPANY = 'https://myndighetshandboken.se/api/companies';
const EXTERNAL_DATA_URL_ABROAD = 'https://myndighetshandboken.se/api/Amyndigheter';

const URL = "https://myndighetshandboken.se";

export default async function sitemap() {
  try {
    const res = await fetch(EXTERNAL_DATA_URL_MYNDIGHET);
    const data = await res.json();
    const myndigheter = data.myndighet;

    const res2 = await fetch(EXTERNAL_DATA_URL_COMPANY);
    const data2 = await res2.json();
    const companies = data2.company;

    const res3 = await fetch(EXTERNAL_DATA_URL_ABROAD);
    const data3 = await res3.json();
    const abroadMyndigheter = data3.Amyndighet;

    const sitemapEntries = myndigheter.map(({ _id }: {_id: any}) => ({
      url: `${URL}/myndighet/${_id}`,
      lastModified: new Date().toISOString(),
    }));

    const sitemapEntries2 = companies.map(({ _id }: {_id: any}) => ({
      url: `${URL}/company/${_id}`,
      lastModified: new Date().toISOString(),
    }));

    const sitemapEntries3 = abroadMyndigheter.map(({ _id }: {_id: any}) => ({
      url: `${URL}/abroadMyndighet/${_id}`,
      lastModified: new Date().toISOString(),
    }));

    const staticRoutes = ["", "/departement", "/faktaover/statistik", "/statistikForetag", "/faktaover/statsbudget", "/faktaover/riksdagen", "/faktaover/SekretessMyndighet", "/faktaover/relations", "/faktaover/foretagMyndigheter", "/faktaover/staten", "/faktaover/Tips", "/om/OmOss", "/om/OmInfo", "/om/Kontakt", "/faktaover/politik", "/faktaover/politik/C", "/faktaover/politik/KD", "/faktaover/politik/L", "/faktaover/politik/S", "/faktaover/politik/M", "/faktaover/politik/V", "/faktaover/politik/MP", "/faktaover/politik/SD"].map((route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
    }));

    return [...staticRoutes, ...sitemapEntries, ...sitemapEntries2, ...sitemapEntries3];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
