<!-- Cho thông tin dữ liệu như file lab_2.json.
Hãy khai báo kiểu dữ liệu với từ khoá "type" cho các dữ liệu bao gồm:

product, products, cart, carts, user, users -->

type product ={
id: number,
title: string,
description: string,
price: number,
discountPercentage: number,
rating: number,
stock: number,
brand: string,
categories: string,
thumbnail: string,
images: string[], //Array<string>;
}

//cart
type cart ={
id: number;
title: string;
price: number;
quantity: number;
total: number;
discountPercentage: number;
discountedPrice: number;
thumbnail: string;
}

//user
type user = {
id: number,
firstName: string,
lastName: string,
maidenName: string,
age: number,
gender: string,
email: string,
phone: string,
username: string,
password: string,
birthDate: string,
image:string,
bloodGroup: string,
height: number,
weight: number,
eyeColor: string,
hair: string[],
domain: string,
ip:string,
address:string[],
city: string,
coordinates:string[],
postalCode: string,
state: string,
macAddress: string,
university: string,
bank:string[],
company:string[],
ein: string,
ssn: string,
userAgent: string,
crypto: string[],
}
