import { Container, Image } from "react-bootstrap"
import "../Pages/Home.css"
const Home = () => {
    return (
        <div>
            <Container fluid className="p-0 Home">
                <div className="position-relative">
                    <Image className=" Indro-img object-fit-cover" src="https://cdn-imgs.dora.run/design/IOmouaZH9AvFgLWDZSNPBN.webp/w/4096/h/4096/format/webp?" />
                    <div className="position-absolute w-100 top-0 indro-desc d-flex flex-column align-items-center">
                        <p className="text-center w-100">Explore the World <br className="d-sm-block d-none" /> with Our Travel <br className="d-sm-block d-none"/> Blog</p>
                        <span className="text-center">Discover the most captivating <br className="d-md-block d-none" /> destinations</span>
                        <a href="#" className="btn">Start Exploring</a>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Home;