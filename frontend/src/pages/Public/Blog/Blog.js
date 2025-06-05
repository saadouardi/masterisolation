import { Header } from '../../../components/Common/Header/Header';
import { Footer } from '../../../components/Common/Footer/Footer';
import { Blog } from '../../../components/Blog/Blog';

import Blog1 from '../../../assets/images/blog/blog1.jpg';
import Blog2 from '../../../assets/images/blog/blog2.webp';
import Blog3 from '../../../assets/images/blog/blog3.jpg';
import './Blog.scss';

export const BlogPage = () => {
    const blogData = [
        {
            date: '05/27/2022',
            img: Blog1,
            title: 'OUR TEAM',
            text: 'This is the best collection ever'
        },
        {
            date: '01/09/2023',
            img: Blog2,
            title: 'OUR COMPANY',
            text: 'This is the best collection ever'
        },
        {
            date: '01/02/2024',
            img: Blog3,
            title: 'OUR SERVICES',
            text: 'This is the best collection ever'
        }
    ];
    return(
        <>
            <Header/>

            <main className="blog-main-page">
                <div className="cover-div about-cover">
                    <h1>#Blog</h1>
                    <h5>Know who are we , what we do and how we do</h5>
                </div>
                <div className='Blog-List'>
                    {blogData.map((blog, index) => (
                        <Blog
                            key={index}
                            BlogDate={blog.date}
                            BlogImg={blog.img}
                            BlogTitle={blog.title}
                            BlogText={blog.text}
                        />
                    ))}
                </div>    
            </main>
            <Footer/>
        </>
    )
}