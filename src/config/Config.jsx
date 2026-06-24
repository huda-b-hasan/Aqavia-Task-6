import TwoPerson from "../Image/TwoPerson.svg";
import CheckGreen from "../Image/CheckGreen.svg";
import Spoon from "../Image/Spoon.svg";
import FileIcon from "../Image/FileIcon.svg";
import TopArrow from "../Image/TopArrow.svg";
import calander from "../Image/calander.svg";
import motor from "../Image/motor.svg";
import checkwithGround from "../Image/checkwithGround.svg";
import house from "../Image/house.svg";
import DriverOne from "../Image/DriverOne.png";
import DriverTwo from "../Image/DriverTwo.png";
import DriverThree from "../Image/DriverThree.png";
import DriverFour from "../Image/DriverFour.png";
import CurrentDriver from "../Image/CurrentDriver.png";
import UserAvatar from "../Image/UserAvatar.png";
import UserAvatar2 from "../Image/UserAvatar2.png";
import car from "../Image/car.png";

export const admin = {
  email: "admin@test.com",
  password: "123",
};
export const StatAdsConfig = [
  {
    type: "daily",
    title: "إجمالي الإعلانات",
    value: "24",
    variant: "light",
    children: [<span className="text-[#16A34A]">+4 هذا الشهر</span>],
  },
  {
    type: "daily",
    title: "الحملات النشطة",
    value: "12",
    variant: "light",
    children: [<span className="text-[#64748B] ">5 تنتهي قريباً</span>],
  },
  {
    type: "daily",
    title: "مرات الظهور",
    value: "1.2M",
    variant: "light",
    children: [<span className="text-[#16A34A] ">+12% زيادة</span>],
  },
  {
    type: "daily",
    title: "معدل النقرات",
    value: "4.8%",
    variant: "light",
    children: [<span className="text-[#64748B] ">متوسط الحملات</span>],
  },
];
export const StatDriverConfig = [
  {
    type: "overView",
    title: "جميع السائقين",
    value: "1,240",
    icon: TwoPerson,
    variant: "light",
    children: [
      <span className="text-[#16A34A] rounded-lg text-lg bg-[#F0FDF4] px-2 py-1 ">
        +12%
      </span>,
    ],
  },
  {
    type: "overView",
    title: "السائقون النشطون",
    value: "850",
    icon: CheckGreen,
    variant: "light",
    children: [],
  },
  {
    type: "overView",
    title: "العاملين حالياً",
    value: "420",
    icon: Spoon,
    variant: "light",

  },
  {
    type: "overView",
    title: "الطلبات المعلقة",
    value: "120",
    icon: FileIcon,
    variant: "light",

  },

];
export const StatConfig = [
  {
    type: "overView",
    title: "إجمالي السائقين",
    value: "1,240",
    icon: TwoPerson,
    variant: "light",
    children: [
      <span className="text-[#16A34A] rounded-lg text-lg bg-[#F0FDF4] px-2 py-1 ">
        +12%
      </span>,
    ],
  },
  {
    type: "overView",
    title: "السائقون النشطون",
    value: "850",
    icon: CheckGreen,
    variant: "light",
    children: [],
  },
  {
    type: "overView",
    title: " إجمالي المطاعم",
    value: "420",
    icon: Spoon,
    variant: "light",
    children: [
      <span className="text-[#64748B] text-sm text-end">مناطق4 </span>,
    ],
  },
  {
    type: "overView",
    title: " طلبات اليوم",
    value: "3,120",
    icon: FileIcon,
    variant: "light",
    children: [
      <span className="text-[#4F46E5] bg-[#EEF2FF] px-2 py-1 rounded-lg text-sm text-end">
        رقم قياسي{" "}
      </span>,
    ],
  },
  {
    type: "daily",
    title: " طلبات معلقة",
    value: "45",
    icon: FileIcon,
    variant: "light",
    color: "bg-[#EF4444]",
    children: [],
  },
  {
    type: "daily",
    title: " قيد التوصيل",
    value: "112",
    icon: FileIcon,
    variant: "light",
    color: "bg-[#3B82F6]",
    children: [],
  },
  {
    type: "daily",
    title: "  اكتملت اليوم",
    value: "2,963",
    icon: FileIcon,
    variant: "light",
    color: "bg-[#10B981]",
    children: [],
  },
  {
    type: "mounthly",
    title: "الإيرادات الشهرية",
    value: "$420,000",
    icon: TopArrow,
    variant: "dark",
    color: "text-[#10B981]",
    children: [],
    footerTitle: "إيرادات اليوم: $15,400",
  },
];
export const driverConfig = [
  {
    photo: DriverOne,
    name: "أحمد محمد",
    TodayRevenue: "$185.00",
    flightNum: "10",
    ratting: "5.0",
  },
  {
    photo: DriverTwo,
    name: "سامي سعيد",
    TodayRevenue: "$185.00",
    flightNum: "9",
    ratting: "3.6",
  },
  {
    photo: DriverThree,
    name: "خالد إبراهيم",
    TodayRevenue: "$185.00",
    flightNum: "5",
    ratting: "4.9",
  },
  {
    photo: DriverFour,
    name: "ليلى يوسف",
    TodayRevenue: "$185.00",
    flightNum: "4",
    ratting: "3.4",
  },
];
export const lastOrderssHead=[
  { header: 'رقم الطلب', accessor: 'id' },
  { header: 'المطعم', accessor: 'Resturant' },
  { header: 'السائق', accessor: 'driver' },
  { header: 'المبلغ', accessor: 'mouny' },
  { header: 'الحالة', accessor: 'status' },

]
export const lastOrdersConfig = [
  {
    id: "#PL-8921",
    Resturant: "برجر هاوس ",
    driver: " أحمد محمد",
    mouny: "$18.00 ",
    status: "on drive",
  },
  {
    id: "#PL-8920",
    Resturant: "  بيتزا بالاس",
    driver: "أحمد محمد",
    mouny: "$18.00 ",
    status: "done",
  },
  {
    id: "#PL-8920",
    Resturant: "  بيتزا بالاس",
    driver: "أحمد محمد",
    mouny: "$18.00 ",
    status: "on progress",
  },
  {
    id: "#PL-8920",
    Resturant: "  بيتزا بالاس",
    driver: "أحمد محمد",
    mouny: "$18.00 ",
    status: "cancel",
  },
];
export const UsersHead=[
  { header: 'الاسم', accessor: 'nameUser' },
  { header: 'الهاتف', accessor: 'phone' },
  { header: 'الايميل', accessor: 'email' },
  { header: 'المدينة', accessor: 'city' },
  { header: 'الحالة', accessor: 'status' },
  { header: 'تاريخ التسجيل', accessor: 'dateRegister' },
  { header: 'العمليات', accessor: 'operation' },
]
export const UsersConfig = [
  {
    id: "#USR-8821",
    photo: UserAvatar,
    name: "محمد العتيبي",
    phone: "050XXXXX91",
    email: "m.otaibi@example.com",
    city: "الرياض",
    status: "active",
    dateRegister: "12 أكتوبر 2023",
  },
  {
    id: "#USR-9912",
    photo: UserAvatar2,
    name: "سارة الشمري",
    phone: "055XXXXX44",
    email: "m.otaibi@example.com",
    city: "الرياض",
    status: "inactive",
    dateRegister: "12 أكتوبر 2023",
  },
  {
    id: "#USR-8821",
    photo: UserAvatar,
    name: "محمد العتيبي",
    phone: "050XXXXX91",
    email: "m.otaibi@example.com",
    city: "الرياض",
    status: "active",
    dateRegister: "12 أكتوبر 2023",
  },
  {
    id: "#USR-9912",
    photo: UserAvatar2,
    name: "سارة الشمري",
    phone: "055XXXXX44",
    email: "m.otaibi@example.com",
    city: "الرياض",
    status: "inactive",
    dateRegister: "12 أكتوبر 2023",
  },
];
export const AdsHead=[
  { header: 'الصورة', accessor: 'img' },
  { header: 'العنوان', accessor: 'address' },
  { header: 'تاريخ البداية', accessor: 'startDate' },
  { header: 'تاريخ النهاية', accessor: 'EndDate' },
  { header: 'تاريخ الحالة', accessor: 'status' },
  { header: 'العمليات', accessor: 'operation' },
]
export const AdsConfig = [
  {
    id: "#AD-99210",
    img: car,
    address: "عرض الصيف للمطاعم",
    startDate: "15 يونيو 2024",
    EndDate: "15 يونيو 2024",
    status: "active",
  },
  {
    id: "#AD-99210",
    img: car,
    address: "عرض الصيف للمطاعم",
    startDate: "15 يونيو 2024",
    EndDate: "15 يونيو 2024",
    status: "inactive",
  },
];
export const ResturantHead=[
  { header: 'اسم المطعم', accessor: 'name' },
  { header: 'المدينة ', accessor: 'city' },
  { header: 'العمولة ', accessor: 'commissoion' },
  { header: 'الحالة', accessor: 'status' },
  { header: 'العمليات', accessor: 'operation' },
]
export const ResturantConfig = [
  {
    name: "لو بريميير جورميه",
    city: "الرياض",
    commissoion: "15%",
    status: "active",
  },
  {
    name: "ستيك هاوس الرواد",
    city: "الرياض",
    commissoion: "12%",
    status: "active",
  },
  {
    name: "لو بريميير جورميه",
    city: "جدة",
    commissoion: "15%",
    status: "inactive",
  },
];
export const StatResturantConfig = [
  {
    title: "إجمالي المطاعم",
    value: "1,284",
    icon: house,
    colorBorder: "#0D1C32",
  },
  {
    title: "المطاعم النشطة",
    value: "942",
    icon: checkwithGround,
    colorBorder: "#22C55E",
    progress: "73% من الإجمالي",
  },
  {
    title: "الطلبات المسلمة اليوم",
    value: "942",
    icon: motor,
    colorBorder: "#77592E",
    progress: "73% من الإجمالي",
  },
  {
    title: "الطلبات الشهرية",
    value: "142,800",
    icon: calander,
    colorBorder: "#CBD5E1",
    progress: "73% من الإجمالي",
  },
];
export const CurrentDriverConfig=
  {
    photo:CurrentDriver,
    name:"أحمد محمد الشمري",
    numCar:" 4492 أ ب ج",
    location:"الرياض - المستودع المركزي",


  }
export const DriverHead=[
  { header: 'اسم السائق', accessor: 'name' },
  { header: 'رقم الهاتف', accessor: 'phone' },
  { header: ' المدينة', accessor: 'city' },
  { header: 'نوع المركبة ', accessor: 'typeCar' },
  { header: 'الحالة ', accessor: 'status' },
  { header: 'يعمل الان', accessor: 'workNow' },
  { header: 'العمليات ', accessor: 'operation' },
]
export const DriverConfig = [
  {
    name: "محمد العتيبي",
    phone: "050XXXXX91",
    city: "  سوريا ",
    typeCar: "شاحنة تبريد 12ط",
    status: "active",
    workNow: "no",
  },
  {
    name: "محمد العتيبي",
    phone: "050XXXXX91",
    city: "سوريا   ",
    typeCar: "شاحنة تبريد 12ط",
    status: "active",
    workNow: "yes",
  },
  {
    name: "محمد العتيبي",
    phone: "050XXXXX91",
    city: "  سوريا ",
    typeCar: "شاحنة تبريد 12ط",
    status: "active",
    workNow: "no",
  },
  {
    name: "محمد العتيبي",
    phone: "050XXXXX91",
    city: "سوريا   ",
    typeCar: "شاحنة تبريد 12ط",
    status: "active",
    workNow: "yes",
  },



];
export const StatPromoConfig = [
  {
    type: "daily",
    title: "إجمالي الأكواد",
    value: "124",
    variant: "light",
  },
  {
    type: "daily",
    title: " الأكواد النشطة",
    value: "12",
    variant: "light",
  },
  {
    type: "daily",
    title: " إجمالي الاستخدام",
    value: "1.2M",
    variant: "light",

  },
  {
    type: "daily",
    title: " معدل التحويل",
    value: "4.8%",
    variant: "light",

  },
];
export const PromoHead=[
  { header: 'الكود ', accessor: 'code' },
  { header: ' نسبة الخصم', accessor: 'commissoion' },
  { header: ' عدد الاستخدام', accessor: 'numOfUse' },
  { header: ' تاريخ الانتهاء ', accessor: 'Date' },
  { header: 'الحالة ', accessor: 'status' },
  { header: 'العمليات ', accessor: 'operation' },
];
export const PromoConfig = [
  {
    code: " SUMMER20",
    commissoion: "050XXXXX91",
    numOfUse: "  7 ",
    Date: "  2024/09/30",
    status: "active",
  },
    {
    code: " SUMMER20",
    commissoion: "050XXXXX91",
    numOfUse: "  7 ",
    Date: "  2024/09/30",
    status: "active",
  },
    {
    code: " PRESTIGE50",
    commissoion: "050XXXXX91",
    numOfUse: "  7 ",
    Date: "  2024/09/30",
    status: "inactive",
  },
];