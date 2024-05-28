const greeting = 'world';


export function hello(world: string = greeting): string {
   if (world == "WebAcademy") {
       return "Hi WebAcademy Total!";
   }
   return `Hello ${world}!`;
}
