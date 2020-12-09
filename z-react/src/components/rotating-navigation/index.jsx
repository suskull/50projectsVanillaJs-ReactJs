import React, {useState} from 'react'
import './index.scss'
const RotatingNavigation = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='body-container'>
            <div className={`container ${isOpen && "show-nav"}`}>
                <div className="circle-container">
                    <div className="circle">
                        <button id="close" onClick={() => setIsOpen(false)}><i className="fas fa-times"></i></button>
                        <button id="open" onClick={() => setIsOpen(true)}><i className="fas fa-bars"></i></button>
                    </div>
                </div>
                <div className="content">
                    <h1>Amazing Article</h1>
                    <small>Florin Pop</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolor repellat corrupti distinctio magnam sequi optio exercitationem, quis fugiat. Laborum optio, blanditiis assumenda veritatis nam architecto modi nihil! Illo laborum dolores quod error earum. Asperiores recusandae ipsum quaerat vitae officiis, atque laudantium impedit, odio tenetur perspiciatis eaque quae quidem eius distinctio sunt dolorum rem id vel ea ratione! Repellendus placeat laudantium eaque numquam sunt obcaecati optio beatae quisquam? Quae ipsum consectetur assumenda reiciendis error quos quo debitis ab ad expedita? Tempore dolorum sunt rerum natus deserunt, rem recusandae ipsum. Tempore, vel? Recusandae, quis a obcaecati incidunt aspernatur assumenda nam dolores.</p>
                    <h3>My dog </h3>
                    <img src="https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" alt="doggy"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo laudantium eligendi maxime iusto neque hic laborum voluptatum quas! Ullam reprehenderit laborum, nisi beatae ipsum nostrum! Nulla deserunt totam, exercitationem quo omnis animi iusto cum cumque velit accusamus aliquam illum hic repudiandae pariatur placeat veritatis fugit tempore unde dolor autem et molestiae minima cupiditate delectus. Cupiditate ullam labore nihil veniam deleniti? Nihil reprehenderit aut ipsam ipsum! Dolore fugit repellendus laborum voluptatibus deleniti ad nihil soluta.</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><i className="fas fa-home"></i>Home</li>
                    <li><i className="fas fa-user-alt"></i>User</li>
                    <li><i className="fas fa-envelope"></i>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default RotatingNavigation
