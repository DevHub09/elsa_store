import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div class="clearfix mt-3 mb-1 m-1">
  <img src="/images/aboutus.jpg" className="col-md-6 float-md-end mb-1  m-2 mt-1 ms-md-3 h-25 w-25" alt="about us"/>
<div className="text-center mt-7">
  <h1>ABOUT US</h1>
  <p>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p> </div>
</div>
    </Layout>
  );
};

export default About;
