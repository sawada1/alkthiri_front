import axios  from "axios";
export default defineEventHandler(async (event) => {
    const { req } = event;
  
    // If the request is for "/offers" or "/offers/{id}"
    if (req.url?.startsWith("/offers")) {
      try {
        const res = await axios.get('https://admin.qitaf.webstdy.com/api/list/cars');
        if (res.status == 200) {
          // Check if the requested page exists in API response
          const id = req.url.split("/")[2]; // Get ID from URL
  
          if (id && !res.data.data.some((offer: any) => offer.id == id)) {
            throw createError({ statusCode: 404, message: "Offer not found" });
          }
        }
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    }
  });
  