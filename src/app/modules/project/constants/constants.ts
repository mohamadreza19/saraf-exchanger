import { Project } from '../types/Project';

export const PROJECTS: Project[] = [
  {
    transactionType: 'خرید', // نوع معامله
    customerFullName: 'علی رضایی', // نام کامل مشتری
    requiredAmountUnit: 'دلار', // واحد مبلغ مورد نیاز
    requiredAmount: '1000', // مقدار
    depositAmountUnit: 'یورو', // واحد مبلغ واریزی
    depositAmount: '900', // مقدار
    conversionRate: '1.11', // نرخ تبدیل
  },
  {
    transactionType: 'فروش', // نوع معامله
    customerFullName: 'مریم احمدی', // نام کامل مشتری
    requiredAmountUnit: 'یورو', // واحد مبلغ مورد نیاز
    requiredAmount: '500', // مقدار
    depositAmountUnit: 'پوند', // واحد مبلغ واریزی
    depositAmount: '430', // مقدار
    conversionRate: '1.16', // نرخ تبدیل
  },
  {
    transactionType: 'خرید', // نوع معامله
    customerFullName: 'سعید محمدی', // نام کامل مشتری
    requiredAmountUnit: 'ریال', // واحد مبلغ مورد نیاز
    requiredAmount: '1500000', // مقدار
    depositAmountUnit: 'دلار', // واحد مبلغ واریزی
    depositAmount: '30', // مقدار
    conversionRate: '50000', // نرخ تبدیل
  },
  {
    transactionType: 'فروش', // نوع معامله
    customerFullName: 'زهرا کریمی', // نام کامل مشتری
    requiredAmountUnit: 'درهم', // واحد مبلغ مورد نیاز
    requiredAmount: '2000', // مقدار
    depositAmountUnit: 'ریال', // واحد مبلغ واریزی
    depositAmount: '23000000', // مقدار
    conversionRate: '11500', // نرخ تبدیل
  },
];
