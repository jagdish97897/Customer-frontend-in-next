import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
const ProductDetais = () => {
  return (
    <div cassName="w-full md:py-20">
      <Wrapper>

        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
              {/* left column start */}
       <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
        <ProductDetailsCarousel/>
       </div>


       {/* right column start */}
       <div className="flex-[1] py-3">
           <div className="text-[34px] font-semibold mb-2">
           INDIAN SHOES HOUSE
           </div>
           <div className="text-lg font-semibold mb-5">
            Men&apos Golf shoes
           </div>
           {/* product price  */}
           <div className="text-lg font-semibold">
              MRP : ₹ 19 748.00
           </div>
           <div className="text-md font-medium text-black/[0.5]">
            incl. of taxes
           </div>
           <div className="text-md font-medium text-black/[0.5] md-20">
               { `(also includes all applicable duties)`}
           </div>
          

           {/* product size range start */}
           <div className="mb-10">
            <div className="flex justify-between mb-2" >
            <div className="text-md font-semibold">
              select size
            </div>
            <div className="text-md font-medium text-black/[0.5] cursor-pointer">
              select Guide
            </div>
            </div>
            
                {/* size selection start */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                    UK 6
                  </div>
                  <div className="border rounded-md text-center py-3 font-medium bg-black/[0.1] cursor-not-allowed opacity-50">
                    UK 6
                  </div>
                </div>
                {/* show error */}
                <div className="text-red-600 mt-1">
                  size selection is required
                </div>
                <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                  Add to Cart
                </button>
                      {/* WHISHLIST BUTTON START */}
                       <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                             <IoMdHeartEmpty size={20} />
                         </button>
                        {/* WHISHLIST BUTTON END */}
               <div>
                <div className="text-lg font-bold mb-5">
                 Product Details
                </div>
                <div className="text-md mb-5">
                The details that you provide for a product affect the way that the product is displayed to customers, make it easier for you to organize your products, and help customers find the product. You don't have to provide every detail for each product.
                </div>
               </div>


           </div>
           </div>
       </div>


      
      <RelatedProducts/>
      </Wrapper>
    </div>
  )
}

export default ProductDetais

