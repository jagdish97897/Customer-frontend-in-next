import HeroBanner from "@/components/HeroBanner"
import ProductCard from "@/components/ProductCard"
import Wrapper from "@/components/Wrapper"



export default function Home(){
    return <main ><HeroBanner/>
    <Wrapper>
      <div className="text-center max-w-[180px] mx-auto my-[50px] md:my-[80px]">
        <div>Buy the product from here.....</div>
        
      </div>
      {/* heading end */}

{/* product grid start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
      <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
      </div>
    </Wrapper>
    </main>
}
