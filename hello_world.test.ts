import { hello } from "../ci_lab03_01/hello_world";


describe("test hello", () => {
 it("should return hello world", () => {
   expect(hello()).toBe("Hello world!");
 });
});
