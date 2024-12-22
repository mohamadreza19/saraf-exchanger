export interface Project {
  transactionType: string; // نوع معامله
  customerFullName: string; // نام کامل مشتری
  requiredAmountUnit: string; // واحد مبلغ مورد نیاز
  requiredAmount: string; // مقدار
  depositAmountUnit: string; // واحد مبلغ واریزی
  depositAmount: string; // مقدار
  conversionRate: string; // نرخ تبدیل
}
