import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const{productId} = useParams();
  // console.log(productId);
  const {products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async() => {
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        // console.log(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index)=>(
                <img src={item} key={index} onClick={()=> setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        {/* ------------------------Product Info--------------------- */}
          <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} className='w-3.5' alt="" />
              <img src={assets.star_icon} className='w-3.5' alt="" />
              <img src={assets.star_icon} className='w-3.5' alt="" />
              <img src={assets.star_icon} className='w-3.5' alt="" />
              <img src={assets.star_dull_icon} className='w-3.5' alt="" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item, index)=>(
                  <button onClick={()=> setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={()=> addToCart(productData._id, size)} className='bg-black text-white text-sm py-3 px-8 active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>Cash on delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
      </div>
      {/* ---------------------------Description & Review Section------------------------------ */}
      <div className='mt-20'>
        <div className='flex'>
          <p className='border px-5 py-3 text-sm'>Description</p>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque quia ut deserunt at mollitia fugiat, similique facere nihil eos in, recusandae cumque natus nam quod, aliquam dolorem unde explicabo aliquid temporibus! Sequi, sed. Rem inventore, error, praesentium totam quia perferendis dolore eligendi aspernatur rerum repellendus dolorem. Accusantium, exercitationem quis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate vitae beatae a iste optio asperiores provident reprehenderit ea quis totam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum recusandae quibusdam adipisci, libero, dicta culpa, ut dolores temporibus pariatur tempora voluptate commodi provident. In magni esse ea, quod dignissimos modi autem consectetur a expedita magnam. Aut obcaecati eaque praesentium asperiores?</p>
        </div>
      </div>

      {/* -------------------------Display related products------------------------------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product