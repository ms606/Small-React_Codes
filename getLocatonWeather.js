export default async location => {

   try {
       const result = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5d96099c583c974e2e9acec8fcb16fe8&units=metric`);
       console.log(await result.json());

       if (result.status === 200) {
           return { success: true, data: await result.json() };
       };

      return { success: false, error: result.statusText };
   } catch (ex) {
       return { success: false, error: ex.message };
   }

}
