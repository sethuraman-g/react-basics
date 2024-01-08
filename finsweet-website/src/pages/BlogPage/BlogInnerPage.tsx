import { Col, Container, Row } from "react-bootstrap"
import OrangeBox from "../../assets/icons/orangebox.svg"
import Andrew from "../../assets/images/AndrewJonson.png"
import svg from "../../assets/icons/button.svg"
import Vision from "../../assets/images/company-vision.png"
import HorizontalShape from "../../assets/images/horizontal-line.png"
import  "./BlogPage.scss"
import { CTAcomponent } from "../../components/ctaSection/CTAcomponent"

export const BlogInnerPage = () => {
  return (
    <>
        <section className="pt-5">
            <Container>
                <Row className="position-relative">
                    <img src={svg} alt="" className="position-absolute end-0 top-0" style={{rotate:"90deg", width:"60px"}}/>
                    <Col md={8}>
                        <img src={OrangeBox} alt="" width={"15px"}/>
                        <h1 className="fw-bold">Breaking the code How did we build our Figma plugin</h1>
                        <p className="text-muted">It is a long established fact that a reader will be distracted by the 
                            readable content of a page when looking at its layout.The Maker is  
                            a decentralized. We aim to attain the greatest satisfaction for our clients
                        </p>
                        <div className="d-flex align-items-center gap-2 my-4">
                        <img src={Andrew} alt="" />
                        <h6>Andrew Jonson <span className="text-muted">| Posted on 27th January 2021</span></h6>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="blog-post-section">
            <Container>
                <Row>
                    <Col className="position-relative" md="12">
                        <img src={Vision} alt="" width={"100%"}/>
                        <div>
                         <img src={HorizontalShape} alt="" className="position-absolute end-0" height={"15px"} width={"30%"}/>
                        </div>
                    </Col>

                    <Col md="12" className="blog-text mt-5">
                        <h1 className="fw-bold">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h1>
                        <p className="text-muted">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                        <p className="text-muted">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                        <p className="text-muted">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                        <p className="text-muted">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.</p>

                        <h4 className="fw-bold">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h4>
                        <span className="text-muted">Step 1: Download the plugin from Figma community, search Ghost UXWriter</span><br />
                        <span className="text-muted">Step 2: Open the plugin on your artboard</span><br />
                        <span className="text-muted">Step 3: Search for your copy or look through the different categories of the copies</span><br />
                        <span className="text-muted">Step 4: Select the type of error you are looking for. You will get three different copies for each error</span><br />
                        <span className="text-muted">Step 5: Tap on the cards to insert text in your frames</span><br />
                        <span className="text-muted">And you are all geared up to make your UX copies more fun and exciting 😎</span>

                        <h4 className="fw-bold pt-3">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h4>
                        <p className="text-muted">Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                    </Col>
                </Row>
            </Container>
        </section>

        <CTAcomponent/>
    </>
  )
}
