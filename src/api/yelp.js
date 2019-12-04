import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer MkhNYqZJUGymM1gWy38WRCaJYh2nbKGbna8vldoAh0Uzv2xvNdQQ0TOotCrztr5Uj9TaUK7eyqcM5IR109Y6EutwWafljGVQX8vwwjLJlbHYPE1s5Fan7_Kxat_mXXYx"
  }
});
