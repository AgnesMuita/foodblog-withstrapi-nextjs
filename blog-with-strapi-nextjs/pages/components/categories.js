import React from 'react';
import img from '../../public/images/soup.avif';
import img2 from '../../public/images/bread.avif';
import img3 from '../../public/images/breakfast.avif';
import img4 from '../../public/images/chicken.avif';
import img5 from '../../public/images/deserts.avif';
import img6 from '../../public/images/pizza.avif';
import img7 from '../../public/images/drinks.avif';
import Image from 'next/image';

function Categories() {
  return (
    <div>
      <h1>Browse By Categories</h1>
      <div className='allCats'> 
        <div className='categories'>
            <div>
              <Image src={img2} width={150} height={150} alt="img" className="img"/>
            </div>
            <div className='catcontent'>
              <h2>Bread</h2>
              <p>
                Delicious Bread Recipes for your taste style
              </p>
            </div>
        </div>
        <div className='categories'>
            <div>
              <Image src={img} width={150} height={150} alt="img" className="img"/>
            </div>
            <div className='catcontent'>
              <h2>Soup</h2>
              <p>
                Delicious Soup Recipes for your taste style
              </p>
            </div>
        </div>
        <div className='categories'>
            <div>
              <Image src={img3} width={150} height={150} alt="img" className="img"/>
            </div>
            <div className='catcontent'>
              <h2>Breakfast</h2>
              <p>
                Delicious Breakfast Recipes for your taste style
              </p>
            </div>
        </div>
        <div className='categories'>
            <div>
              <Image src={img4} width={150} height={150} alt="img" className="img"/>
            </div>
            <div className='catcontent'>
              <h2>Chicken</h2>
              <p>
                Delicious Chicken Recipes for your taste style
              </p>
            </div>
        </div>
        <div className='categories'>
            <div>
              <Image src={img5} width={150} height={150} alt="img" className="img"/>
            </div>
            <div className='catcontent'>
              <h2>Desserts</h2>
              <p>
                Delicious Dessert Recipes for your taste style
              </p>
            </div>
        </div>
        <div className='categories'>
            <div>
              <Image src={img6} width={150} height={150} alt="img" className="img"/>
            </div>
            <div className='catcontent'>
              <h2>Pizza</h2>
              <p>
                Delicious Pizza Recipes for your taste style
              </p>
            </div>
        </div>
        <div className='categories'>
            <div>
              <Image src={img7} width={150} height={150} alt="img" className="img"/>
            </div>
            <div className='catcontent'>
              <h2>Drinks</h2>
              <p>
                Delicious Drinks Recipes for your taste style
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Categories;