import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'داشبورد',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'داشبورد',
          route: '/dashboard',
          children: [
            { label: 'در یک نگاه', route: '/dashboard/view' },

            // { label: 'Podcast', route: '/dashboard/podcast' },
          ],
        },
      ],
    },
    {
      group: 'اطلاعات اولیه',
      separator: true,
      items: [
        {
          icon: 'assets/icons/material-icons/outline/mony.svg',
          label: 'اطلاعات اولیه',
          route: '/financial',
          children: [
            {
              label: 'ارزها',
              route: '/financial/currency',
            },
            {
              label: 'بانک/حساب/دسته چک',
              icon: 'assets/icons/circum-icons/outline/bank.svg',
              children: [
                {
                  label: 'بانک ها',
                  route: '/geographical/bank',
                },
                {
                  label: 'حساب ها',
                  route: '/financial/bank-account',
                },
                {
                  label: 'دسته چک',
                  route: '/financial/bank-checkbook',
                },
              ],
            },
            {
              label: 'صندوق / خزانه',
              route: '/financial/cash-treasury',
            },
            {
              label: 'سهام داران',
              route: '/financial/shareholder',
              // children: [
              //   {
              //     label: 'سهام داران',
              //     route: '/financial/shareholder',
              //   },
              //   // {
              //   //   label: 'کشور',
              //   //   route: '/geographical/country',
              //   // },
              //   // {
              //   //   label: 'شهر',
              //   //   route: '/geographical/city',
              //   // },
              // ],
            },
          ],
        },
      ],
    },
    {
      group: 'کاربران',
      separator: true,

      items: [
        {
          icon: '/assets/icons/material-icons/outline/person.svg',
          label: ' کارمند ها',
          route: '/resource/employee',
        },
        {
          icon: '/assets/icons/material-icons/outline/referral.svg',
          label: ' معرف ها',
          route: '/resource/referrer',
        },
        {
          icon: '/assets/icons/material-icons/outline/people.svg',
          label: ' مشتریان',
          route: '/resource/customer',
        },
      ],
    },
    {
      group: 'خرید و فروش ارز',
      separator: true,
      items: [
        {
          icon: '/assets/icons/material-icons/outline/folders.svg',
          label: 'پروژه ها',
          route: '/project',
        },
      ],
    },
    {
      group: '',
      separator: true,
      items: [
        {
          icon: '/assets/icons/material-icons/outline/transfer.svg',
          label: 'انتقال',
          route: '/financial/transfer',
        },
      ],
    },
    {
      group: '',
      separator: true,
      items: [
        {
          icon: '/assets/icons/material-icons/outline/hand-money.svg',
          label: 'دریافت',
          route: '/financial/receive',
        },
        {
          icon: '/assets/icons/material-icons/outline/wallet.svg',
          label: ' پرداخت',
          route: '/financial/pay',
        },
      ],
    },
    {
      group: '',
      separator: true,
      items: [
        {
          icon: '/assets/icons/material-icons/outline/receipt.svg',
          label: 'صورتحساب تمدید پنل',
          route: '/financial/panel-renewal',
        },
      ],
    },
    {
      group: '  ارتباط با پشتیبانی',
      separator: true,
      items: [
        // {
        //   icon: 'assets/icons/material-icons/outline/clipboard.svg',
        //   label: 'گزارش ها',
        //   route: '/reports',
        // },
        {
          icon: 'assets/icons/font-awesome/outline/comment.svg',
          label: 'ارتباط با پشتیبانی',
          route: '/contact/support',
        },
      ],
    },

    {
      group: 'تنظیمات',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'تنظیمات',
          route: '/settings',
        },
      ],
    },
    {
      group: '',
      separator: false,
      selected: true,
      items: [
        {
          label: 'خروج',
          // icon: 'assets/icons/heroicons/outline/power.svg',
          route: '/logout',
        },
      ],
    },
  ];
}
