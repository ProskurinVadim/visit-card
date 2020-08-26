import React from "react";
import WorkExperience from "../../../../components/WorkExperience";
import List from "../../../../decorators/List";
import "./style.css"
const WorkExp = [{workCompanyName:"startup",workDuration:"00--00",workPosition:"mentor",workDescription:"addLater"}];
const ProfileDescription = () => {
    const list = List(WorkExperience);
    return (
        <>
            <h2 className="resume-header">Info</h2>
            <div className="resume-block info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid esse expedita quae quo repudiandae sunt voluptate voluptates! Accusantium ad at consectetur doloremque dolores ex odio quaerat quam recusandae voluptatem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis consequatur cum doloremque enim, eum excepturi expedita explicabo fugit illum impedit nostrum officiis praesentium reprehenderit soluta tempore ullam vero voluptatem!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet assumenda consectetur dolor ducimus eius exercitationem facere impedit laboriosam libero, nihil perspiciatis quia quos reiciendis rerum, sed suscipit. Ad, veritatis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima necessitatibus praesentium provident quas. Fuga fugit nam nobis numquam, possimus reiciendis saepe voluptatum. Dolores eaque explicabo illo, incidunt quaerat quo totam?
            </div>
            <h2 className="resume-header">Education</h2>
            <div className="resume-block education">
                <h3>Kiev Politehnica  University</h3>
                <h4>Device Making Faculty</h4>
                <p>Automation and Computer Technology</p>
                <p>2016 - to the present</p>
            </div>
            <h2 className="resume-header">Experience</h2>
            <div className="resume-block experience">
                {list(WorkExp,"work-experience-list","work-experience-list-item")}
            </div>
        </>
    )
};


export default ProfileDescription