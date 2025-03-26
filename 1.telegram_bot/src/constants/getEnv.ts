export const getEnv =(value:string, defaultValue?:string)=>{
  const env = process.env[value] || defaultValue;
  if (!env) {
    throw new Error(`Missing env ${value}`);
  }
  return env;
}



export const TELEBOT_KEY = getEnv('TELEBOT_KEY');
export const QUIZE_KEY = getEnv('QUIZE_KEY');
export const QUIZE_URI = getEnv('QUIZE_URI');