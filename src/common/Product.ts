export type product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[] // Khai báo kiểu array type

  // images: Array<string> // Khai báo kiểu generic type
}
