require('dotenv/config');

const StripeConfig = {
  pubishableKey: process.env.PUBLISHABLE_KEY,
};

export default StripeConfig;