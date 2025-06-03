import { Header } from '../../../components/Common/Header/Header';
import { Footer } from '../../../components/Common/Footer/Footer';
import { Blog } from '../../../components/Blog/Blog';

import Blog1 from '../../../assets/images/blog/blog1.jpg';
import Blog2 from '../../../assets/images/blog/blog2.webp';
import Blog3 from '../../../assets/images/blog/blog3.jpg';
import './Blog.scss';

export const BlogPage = () =>{
    return(
        <>
            <Header/>

            <main class="blog-main-page">
                <div class="cover-div about-cover">
                    <h1>#Blog</h1>
                    <h5>Know who are we , what we do and how we do</h5>
                </div>
                
                <div className='Blog-List'>
                    <Blog BlogDate='05/27/2022' BlogImg={Blog1} BlogTitle='OUR TEAM' BlogText='This is the best collection ever' />
                    <Blog BlogDate='01/09/2023' BlogImg={Blog2} BlogTitle='OUR COMPANY' BlogText='This is the best collection ever' />
                    <Blog BlogDate='01/02/2024' BlogImg={Blog3} BlogTitle='OUR SERVICES' BlogText='This is the best collection ever' />
                </div>
                
            </main>
            <Footer/>
        </>
    )
}