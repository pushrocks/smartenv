export let defaultme = null;
declare global {
  namespace NodeJS {
    interface Global {
      window: any;
      navigator: any;
    }
  }
}
