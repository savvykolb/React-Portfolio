import '../styles/Style.css';
import resume from '../../img/docs/2021 Kolb, Savannah_resume_.pdf';

function Resume() {
  return (
    <section id="resume" class="resume section-bg">
      <div class="container">

        <div class="section-title">

          <h2>Resume     <a target='_blank' rel="noreferrer" href={resume} download="sKolb_Resume.pdf"><i class="fa fa-download"></i>
          </a></h2>
          <p><em>“Start by doing what’s necessary, then what’s possible, and suddenly you are doing the impossible.” –
            Francis of Assisi
          </em></p>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Coding: Full Stack Web Development Certificate</h4>
            <h5>2021</h5>
            <p><em>University of North Carolina at Chapel Hill</em></p>
            <p> A rigorous curriculum that ensured proficiency in: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js,
              Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git,
              and more.</p>
          </div>
          <div class="resume-item">
            <h4>Bachelor of Arts in Liberal Studies &amp; Humanities</h4>
            <h5>2009 - 2013</h5>
            <p><em>California State University, San Bernardino, CA</em></p>
            <p>A multidisciplinary degree program designed for students whose needs or interests require a more broadly
              based liberal arts curriculum than is possible through existing disciplines. This program is useful for
              careers requiring a broad educational background and strong communication, computer, research, and critical
              thinking skills.</p>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Middle School Teacher</h4>
            <h5>2018 - Present</h5>
            <p><em>Guilford County Schools, Greensboro, NC </em></p>
            <p>
              <ul>
                <li>Developed detailed lesson plans for in class and digital virtual learning. Developed, re-evaluated,
                  and communicated classroom policies and procedures as necessary. </li>
                <li>Established a learning environment to meet and enhance the children’s needs of emotional intellectual,
                  social, and creative strengths throughout in class instruction and digital virtual learning. </li>
                <li>Instructed, prepared, and assessed over 120 students for proficiency on state standards.</li>
                <li>Established a positive rapport with all students and parents through home calls, emails, and written
                  letters.</li>
                <li>Maintained a projected learning growth in all grade 7 ELA classes and Math classes for all 3 years.
                </li>
              </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>Co-Facilitator Instructor</h4>
            <h5>2019 - Present</h5>
            <p><em>GCS Alternative Certification Track, Greensboro, NC</em></p>
            <p>
              <ul>
                <li>Provided structured
                  supports to teachers from varying subject areas and grade levels as teachers learned new concepts of
                  unit design, using digital
                  resources to further enhance virtual learning.</li>
                <li>Utilized virtual platforms to forge strong relationships, provide instructional
                  feedback, and established a virtual learning community during Building Blocks.</li>
                <li>Building relationships with new teachers that go beyond the program; continuing to be a mentor outside
                  me co-facilitating in the classroom.</li>
              </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>Human Resource Manager</h4>
            <h5>2016 - 2018</h5>
            <p><em>Target, Manhattan Beach, CA</em></p>
            <p>
              <ul>
                <li>Manage and oversee all human resources functions for 300-400 employees. Perform talent management,
                  recruitment, and human resources for multiple store locations. Allocate payroll throughout the business
                  and evaluate staffing requirements.
                </li>
                <li>Develop company policy and procedures
                  applicable to all levels of the company. Oversee the implementation of all new policy and procedure.
                </li>
                <li>Guide key decisions and manage processes
                  related to staffing, training, employee relations, performance management, succession planning,
                  compensation and benefits.</li>
                <li>Organize and maintain server documents according to state and federal guidelines. Proficient in
                  multiple HRIS systems; Kronos, Oracle, Paycom, Target CW.</li>
              </ul>
            </p>
          </div>
          <div class="resume-item">
            <h4>Production Manager</h4>
            <h5>2013 - 2016</h5>
            <p><em>TEN: The Enthusiast Network, El Segundo, CA</em></p>
            <p>
              <ul>
                <li>Created production budgets for large events and production shoots. Planned and coordinated shows and events within budget parameters.
                </li>
                <li>Forecasted expenses and developed expense reports. Managed all aspects of events and shows including the coordination of food, equipment, permits, and
                  signage.
                </li>
                <li>Created daily call sheets and managed all staff scheduling. Managed vendor relations, closed supplier accounts, and handled all stock and inventory manager.</li>
                <li>Doubled YouTube views with analysis, innovative strategies, and developing unique content marketed to a broader viewer range. Helped build and manage team to assist with continual growth.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Resume;