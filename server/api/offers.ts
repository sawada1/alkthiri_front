import axios  from "axios";
export default defineEventHandler(async () => {
    try {
        const offersRes = await axios.get('https://admin.qitaf.webstdy.com/api/list/cars');
        if (offersRes.status == 200) {
          let routes = offersRes.data.data.map((offer:any) => `/offers/${offer.id}`)
          return routes;
        }
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
  })