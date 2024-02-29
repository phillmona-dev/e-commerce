import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { getDeliveryOption } from '../data/deliveryOptions.js';
renderOrderSummary();
renderPaymentSummary();
getDeliveryOption();
