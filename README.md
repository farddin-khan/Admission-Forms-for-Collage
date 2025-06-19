# Admission-Forms-for-Collage


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My University Portal</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header id="main-header">
    <div class="logo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bBzfOskwkgubxP_88Nadc_JeUUPuxluVfw&s" alt="DU Logo">
      <div class="logo-text">
        <h2>My University</h2>
        <p>Since. 2020</p>
      </div>
    </div>
    <nav id="desktop-nav">
      <ul>
        <li><a href="#home" class="active">Home</a></li>
        <li><a href="#departments">Departments</a></li>
        <li><a href="#campus">Campus Life</a></li>
        <li><a href="#admissions">Admissions</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div class="nav-buttons">
      <button id="student-portal-btn" class="btn two btn-outline">Student Portal</button>
      <button id="mobile-menu-btn" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <nav id="mobile-nav">
    <ul>
      <li><a class="one" href="#home">Home</a></li>
      <li><a class="one" href="#departments">Departments</a></li>
      <li><a class="one" href="#campus">Campus Life</a></li>
      <li><a class="one" href="#admissions">Admissions</a></li>
      <li><a class="one" href="#contact">Contact</a></li>
      <li><a class="one" href="#" id="mobile-portal-btn">Student Portal</a></li>
    </ul>
  </nav>

  <div id="portal-modal" class="modal">
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <div class="tab-container">
        <div class="tabs">
          <button class="tab-btn active" data-tab="login">Login</button>
          <button class="tab-btn" data-tab="register">Register</button>
        </div>

        <div id="login-tab" class="tab-content active">
          <h2>Student Login</h2>
          <form id="loginForm">
            <div class="form-group">
              <label for="loginName">Full Name</label>
              <input type="text" id="loginName" placeholder="Enter your full name" required>
            </div>
            <div class="form-group">
              <label for="loginRollNo">Roll Number</label>
              <input type="text" id="loginRollNo" placeholder="Enter your roll number" required>
            </div>
            <p id="login-error" class="error-message"></p>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>

        <div id="register-tab" class="tab-content">
          <h2>New Student Registration</h2>
          <form id="registerForm">
            <div class="form-group">
              <label for="regName">Full Name</label>
              <input type="text" id="regName" placeholder="Enter your full name" required>
            </div>
            <div class="form-group">
              <label for="regRollNo">Roll Number</label>
              <input type="text" id="regRollNo" placeholder="Enter assigned roll number" required>
            </div>
            <div class="form-group">
              <label for="regAge">Age</label>
              <input type="number" id="regAge" placeholder="Enter your age" required>
            </div>
            <div class="form-group">
              <label for="regEmail">Email</label>
              <input type="email" id="regEmail" placeholder="Enter your email address" required>
            </div>
            <div class="form-group">
              <label for="regPhone">Phone Number</label>
              <input type="tel" id="regPhone" placeholder="Enter your phone number" required>
            </div>
            <div class="form-group">
              <label for="regFatherName">Father's Name</label>
              <input type="text" id="regFatherName" placeholder="Enter your father's name" required>
            </div>
            <div class="form-group">
              <label for="regCourse">Course</label>
              <select id="regCourse" required>
                <option value="" disabled selected>Select a course</option>
                <option value="B.Sc Computer Science">B.Sc Computer Science</option>
                <option value="B.A. English">B.A. English</option>
                <option value="B.Com">B.Com</option>
                <option value="B.Sc Physics">B.Sc Physics</option>
                <option value="B.A. Economics">B.A. Economics</option>
              </select>
            </div>
            <p id="register-message" class="success-message"></p>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div id="student-dashboard" class="dashboard-container">
    <div class="dashboard-header">
      <h2>Student Dashboard</h2>
      <button id="logout-btn" class="btn btn-outline">Logout</button>
    </div>
    <div class="dashboard-content">
      <div class="student-info card">
        <div class="student-profile">
          <div class="profile-image">
            <i class="fas fa-user-graduate"></i>
          </div>
          <div class="profile-details">
            <h3 id="dashboard-student-name"></h3>
            <p>Roll No: <span id="dashboard-roll-no"></span></p>
            <p>Course: <span id="dashboard-course"></span></p>
            <p>Semester: <span id="dashboard-semester"></span></p>
          </div>
        </div>
      </div>
      
      <div class="dashboard-widgets">
        <div class="card attendance-card">
          <h3><i class="fas fa-calendar-check"></i> Attendance</h3>
          <div class="attendance-chart">
            <div class="progress-circle" data-percentage="85">
              <span class="progress-value">85%</span>
            </div>
          </div>
          <p>Overall Attendance</p>
        </div>
        
        <div class="card subjects-card">
          <h3><i class="fas fa-book"></i> Current Subjects</h3>
          <ul id="dashboard-subjects"></ul>
        </div>
        
        <div class="card timeline-card">
          <h3><i class="fas fa-clock"></i> Upcoming Events</h3>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-date">Jun 15</div>
              <div class="timeline-content">
                <h4>Mid-semester Exam</h4>
                <p>Venue: Main Hall</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Jun 22</div>
              <div class="timeline-content">
                <h4>Tech Fest Registration</h4>
                <p>Last date to register</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Jul 05</div>
              <div class="timeline-content">
                <h4>Cultural Event</h4>
                <p>College Auditorium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section id="home" class="hero-section">
    <div class="hero-content">
      <h1 class="animate-fade-in">Welcome to Delhi University</h1>
      <p class="animate-fade-in">Shaping Minds, Building Futures</p>
      <div class="hero-buttons animate-fade-in">
        <a href="#admissions" class="btn btn-primary">Apply Now</a>
        <a href="#departments" class="btn btn-outline">Explore Programs</a>
      </div>
    </div>
  </section>

  <div class="ticker-wrap">
    <div class="ticker">
      <div class="ticker-item">📢 Admissions Open for 2025 Academic Session</div>
      <div class="ticker-item">🎓 Convocation Ceremony on July 10th</div>
      <div class="ticker-item">📰 DU Times Monthly Newsletter Out Now</div>
      <div class="ticker-item">🏆 University Ranked #1 in Research Excellence</div>
      <div class="ticker-item">🌐 International Exchange Program Applications Open</div>
    </div>
  </div>

  <section id="highlights" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">University Highlights</h2>
        <p class="section-subtitle">Discover what makes Delhi University special</p>
      </div>
      
      <div class="highlights-grid">
        <div class="highlight-card">
          <div class="highlight-icon">
            <i class="fas fa-medal"></i>
          </div>
          <h3>Top Ranked</h3>
          <p>Consistently ranked among the top universities nationally</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">
            <i class="fas fa-flask"></i>
          </div>
          <h3>Research Excellence</h3>
          <p>Leading research across multiple disciplines</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">
            <i class="fas fa-globe"></i>
          </div>
          <h3>Global Network</h3>
          <p>Partnerships with 150+ international universities</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">
            <i class="fas fa-users"></i>
          </div>
          <h3>Alumni Success</h3>
          <p>Distinguished alumni across all fields</p>
        </div>
      </div>
    </div>
  </section>

  <section id="departments" class="section bg-light">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Departments</h2>
        <p class="section-subtitle">Excellence across diverse fields of study</p>
      </div>
      
      <div class="departments-grid">
        <div class="department-card">
          <div class="department-image" style="background-image: url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');"></div>
          <div class="department-content">
            <h3>Computer Science</h3>
            <p>Cutting-edge research and education in computing technologies</p>
            <a href="#" class="btn-text">Learn more <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
        
        <div class="department-card">
          <div class="department-image" style="background-image: url('https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80');"></div>
          <div class="department-content">
            <h3>Physics</h3>
            <p>Exploring the fundamental laws of nature through research and experimentation</p>
            <a href="#" class="btn-text">Learn more <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
        
        <div class="department-card">
          <div class="department-image" style="background-image: url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80');"></div>
          <div class="department-content">
            <h3>Economics</h3>
            <p>Understanding economic systems and policies for sustainable development</p>
            <a href="#" class="btn-text">Learn more <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
        
        <div class="department-card">
          <div class="department-image" style="background-image: url('https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80');"></div>
          <div class="department-content">
            <h3>English Literature</h3>
            <p>Exploring literary traditions and cultural expressions across periods</p>
            <a href="#" class="btn-text">Learn more <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="campus" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Campus Life</h2>
        <p class="section-subtitle">Experience the vibrant Delhi University community</p>
      </div>
      
      <div class="campus-gallery">
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Campus Building">
          <div class="gallery-overlay">
            <h4>Historic Architecture</h4>
          </div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Library">
          <div class="gallery-overlay">
            <h4>Modern Library</h4>
          </div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Sports Facilities">
          <div class="gallery-overlay">
            <h4>Sports Facilities</h4>
          </div>
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Cultural Event">
          <div class="gallery-overlay">
            <h4>Cultural Events</h4>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="admissions" class="section bg-light">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Admissions 2025</h2>
        <p class="section-subtitle">Your journey to academic excellence begins here</p>
      </div>
      
      <div class="admissions-content">
        <div class="admissions-info">
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-calendar"></i>
            </div>
            <h3>Key Dates</h3>
            <ul>
              <li><strong>Applications Open:</strong> May 1, 2025</li>
              <li><strong>Application Deadline:</strong> June 30, 2025</li>
              <li><strong>Entrance Exams:</strong> July 10-15, 2025</li>
              <li><strong>Results:</strong> July 31, 2025</li>
            </ul>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-file-alt"></i>
            </div>
            <h3>Required Documents</h3>
            <ul>
              <li>High School Transcripts</li>
              <li>Identity Proof</li>
              <li>Passport Size Photographs</li>
              <li>Income Certificate (if applicable)</li>
              <li>Category Certificate (if applicable)</li>
            </ul>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>Eligibility</h3>
            <p>Minimum 60% aggregate in qualifying examination. Special categories may have relaxation as per government norms.</p>
            <p><a href="#" class="btn-text">View detailed eligibility criteria <i class="fas fa-external-link-alt"></i></a></p>
          </div>
        </div>
        
        <div class="registration-form card">
          <h3>Admission Inquiry</h3>
          <form id="admissionForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" placeholder="Your full name" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" placeholder="Your email address" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Your phone number" required>
            </div>
            <div class="form-group">
              <label for="course">Interested Program</label>
              <select id="course" required>
                <option value="" disabled selected>Select a program</option>
                <option value="B.Sc Computer Science">B.Sc Computer Science</option>
                <option value="B.A. English">B.A. English</option>
                <option value="B.Com">B.Com</option>
                <option value="B.Sc Physics">B.Sc Physics</option>
                <option value="B.A. Economics">B.A. Economics</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message (Optional)</label>
              <textarea id="message" placeholder="Any specific queries or information you need"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Submit Inquiry</button>
          </form>
          <p id="confirmationMessage" class="success-message"></p>
        </div>
      </div>
    </div>
  </section>

  <section id="events" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Upcoming Events</h2>
        <p class="section-subtitle">Join us for these exciting events</p>
      </div>
      
      <div class="events-slider">
        <div class="event-card">
          <div class="event-date">
            <span class="day">15</span>
            <span class="month">Jun</span>
          </div>
          <div class="event-details">
            <h3>Annual Tech Symposium</h3>
            <p class="event-meta"><i class="fas fa-map-marker-alt"></i> Main Auditorium</p>
            <p class="event-meta"><i class="fas fa-clock"></i> 10:00 AM - 4:00 PM</p>
            <p>Join us for a day of technological innovation and inspiration with industry leaders.</p>
          </div>
        </div>
        
        <div class="event-card">
          <div class="event-date">
            <span class="day">22</span>
            <span class="month">Jun</span>
          </div>
          <div class="event-details">
            <h3>Literary Festival</h3>
            <p class="event-meta"><i class="fas fa-map-marker-alt"></i> Central Library</p>
            <p class="event-meta"><i class="fas fa-clock"></i> 11:00 AM - 5:00 PM</p>
            <p>A celebration of literature with book launches, author talks, and poetry readings.</p>
          </div>
        </div>
        
        <div class="event-card">
          <div class="event-date">
            <span class="day">05</span>
            <span class="month">Jul</span>
          </div>
          <div class="event-details">
            <h3>Cultural Night</h3>
            <p class="event-meta"><i class="fas fa-map-marker-alt"></i> Open Air Theater</p>
            <p class="event-meta"><i class="fas fa-clock"></i> 6:00 PM - 10:00 PM</p>
            <p>Experience diverse cultural performances from our talented students.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="testimonials" class="section bg-gradient">
    <div class="container">
      <div class="section-header light">
        <h2 class="section-title">Student Testimonials</h2>
        <p class="section-subtitle">What our students say about us</p>
      </div>
      
      <div class="testimonial-slider">
        <div class="testimonial">
          <div class="testimonial-content">
            <p>"My time at Delhi University has been transformative. The faculty's dedication and the rich academic environment have truly shaped my thinking and career aspirations."</p>
          </div>
          <div class="testimonial-author">
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Student">
            <div>
              <h4>Priya Sharma</h4>
              <p>B.Sc Computer Science, Final Year</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial">
          <div class="testimonial-content">
            <p>"The research opportunities and international exposure I received at DU have been incredible. The university truly prepares you for global challenges."</p>
          </div>
          <div class="testimonial-author">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student">
            <div>
              <h4>Rahul Kapoor</h4>
              <p>B.A. Economics, Alumnus</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial">
          <div class="testimonial-content">
            <p>"Beyond academics, the vibrant campus life and diverse student community have made my university experience complete. I've made lifelong friends and connections here."</p>
          </div>
          <div class="testimonial-author">
            <img src="WhatsAppImage2024-09-11at10.30.00PM.jpeg" alt="Student">
            <div>
              <h4>Farddin Khan</h4>
              <p>BCA Literature, Second Year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Contact Us</h2>
        <p class="section-subtitle">We're here to help</p>
      </div>
      
      <div class="contact-container">
        <div class="contact-info">
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>Address</h3>
            <p>Delhi University East Campus</p>
            <p>Delhi - 110096, India</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <h3>Phone</h3>
            <p>Admissions: +91-11-2700-XXXX</p>
            <p>General Inquiries: +91-11-2700-XXXX</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="84e5e0e9edf7f7edebeaf7c4e0f1aae5e7aaedea">&#160;farddonkhan18@gmail.com</a></p>
            <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="fe97909891be9a8bd09f9dd09790">&#160;farddonkhan18@gmail.com</a></p>
          </div>
          
          <div class="contact-social">
            <h3>Connect With Us</h3>
            <div class="social-icons">
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        
        <div class="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.1435436657706!2d77.20648587489419!3d28.683608175613422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde13cf5e35f%3A0xec8b83d04f9e880f!2sUniversity%20of%20Delhi!5e0!3m2!1sen!2sin!4v1686490321714!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-widget">
            <h3>Delhi University</h3>
            <p>A premier institution committed to excellence in education, research, and innovation since 1922.</p>
            <div class="footer-subscribe">
              <h4>Subscribe to Newsletter</h4>
              <form id="newsletter-form">
                <input type="email" placeholder="Your email address" required>
                <button type="submit" aria-label="Subscribe"><i class="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
          
          <div class="footer-widget">
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#departments">Departments</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#campus">Campus Life</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-widget">
            <h3>Resources</h3>
            <ul class="footer-links">
              <li><a href="#">University Library</a></li>
              <li><a href="#">Research Portal</a></li>
              <li><a href="#">Alumni Network</a></li>
              <li><a href="#">Career Services</a></li>
              <li><a href="#">Student Handbook</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2025 Delhi University | All Rights Reserved</p>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js">
  </script><script src="script.js"></script>
</body>
</html>




STYLEING IN CSS

/* Base Styles */
:root {
  --primary-color: #1a1a1a;
  --secondary-color: #c8102e;
  --accent-color: #f5f5f5;
  --text-color: #333;
  --text-light: #777;
  --white: #ffffff;
  --bg-light: #f8f9fa;
  --bg-dark: #212529;
  --shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
  --border-radius: 8px;
  --border-color: #e5e5e5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--white);
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  margin-bottom: 0.5em;
  font-weight: 600;
  line-height: 1.3;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 1.75rem;
}

p {
  margin-bottom: 1rem;
}

a {
  color: var(--secondary-color);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: var(--primary-color);
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 24px;
  font-weight: 500;
  text-align: center;
  border-radius: var(--border-radius);
  transition: var(--transition);
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background-color: var(--secondary-color);
  color: var(--white);
}

.btn-primary:hover {
  background-color: #a8102a;
  color: var(--white);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
}

.two{
  margin-left: 80%;
  margin-top: 10px;

}

.btn-outline:hover {
  background-color: var(--secondary-color);
  color: var(--white);
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-text {
  font-weight: 500;
  color: var(--secondary-color);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-text i {
  font-size: 0.8em;
  transition: transform 0.2s ease;
}

.btn-text:hover i {
  transform: translateX(5px);
}

/* Header & Navigation */
#main-header {
  background-color: var(--primary-color);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: var(--shadow);
}

#main-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo img {
  height: 50px;
  border-radius: 8px;
}

.logo-text {
  color: var(--white);
}

.logo-text h2 {
  font-size: 1.5rem;
  margin-bottom: 0;
}

.logo-text p {
  font-size: 0.8rem;
  margin-bottom: 0;
  opacity: 0.8;
}

#desktop-nav ul {
  display: flex;
  list-style: none;
  gap: 30px;
}

#desktop-nav{
  margin-left: 60%;
  margin-top: -40px;
}

#desktop-nav a {
  color: var(--white);
  font-weight: 500;
  position: relative;
}

#desktop-nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: var(--secondary-color);
  bottom: -5px;
  left: 0;
  transition: width 0.3s;
}

#desktop-nav a:hover::after,
#desktop-nav a.active::after {
  width: 100%;
}

.nav-buttons {
  display: flex;
  gap: 15px;
  align-items: center;
}

#mobile-menu-btn {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 24px;
  position: relative;
}

#mobile-menu-btn span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: var(--white);
  border-radius: 3px;
  transition: all 0.3s ease;
}

#mobile-menu-btn span:nth-child(1) {
  top: 0;
}

#mobile-menu-btn span:nth-child(2) {
  top: 10px;
}

#mobile-menu-btn span:nth-child(3) {
  top: 20px;
}

#mobile-nav {
  display: none;
  position: fixed;
  top: 80px;
  left: 10;
  width: 100%;
  background-color: var(--primary-color);
  padding: 20px 0;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 999;
  
}


#mobile-nav.active {
  transform: translateY(0);
  opacity: 1;
}

#mobile-nav ul {
  list-style: none;
  padding: 0 20px;
}

#mobile-nav li {
  margin-bottom: 15px;
}

#mobile-nav a {
  color: var(--white);
  font-weight: 500;
  font-size: 1.2rem;
  display: block;
  padding: 8px 0;

}

/* Modal */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 1010;
  overflow-y: auto;
  padding: 50px 20px;
}

.modal-content {
  background-color: var(--white);
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  border-radius: var(--border-radius);
  position: relative;
  animation: modalFadeIn 0.3s;
}

@keyframes modalFadeIn {
  from { opacity: 0; transform: translateY(-50px); }
  to { opacity: 1; transform: translateY(0); }
}

.close-modal {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 28px;
  cursor: pointer;
  transition: var(--transition);
}

.close-modal:hover {
  color: var(--secondary-color);
}

/* Tabs */
.tabs {
  display: flex;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--border-color);
}

.tab-btn {
  background: none;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: var(--transition);
  font-size: 1rem;
}

.tab-btn.active {
  color: var(--secondary-color);
  border-bottom-color: var(--secondary-color);
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Form */
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

input, select, textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-family: inherit;
  transition: var(--transition);
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 2px rgba(200, 16, 46, 0.2);
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.error-message {
  color: var(--secondary-color);
  font-size: 0.9rem;
  margin-top: 5px;
}

.success-message {
  color: #28a745;
  font-size: 0.9rem;
  margin-top: 15px;
}

/* Hero Section */
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.hero-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

/* Ticker */
.ticker-wrap {
  background-color: var(--secondary-color);
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.ticker {
  display: flex;
  animation: ticker 30s linear infinite;
  white-space: nowrap;
}

.ticker-item {
  color: white;
  padding: 0 2rem;
  font-weight: 500;
}

@keyframes ticker {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

/* Sections */
.section {
  padding: 80px 0;
}

.bg-light {
  background-color: var(--bg-light);
}

.bg-gradient {
  background: linear-gradient(135deg, var(--primary-color), #2c2c2c);
  color: var(--white);
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  display: block;
  width: 70px;
  height: 3px;
  background-color: var(--secondary-color);
  margin: 15px auto 0;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto;
}

.section-header.light .section-title,
.section-header.light .section-subtitle {
  color: var(--white);
}

/* University Highlights */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.highlight-card {
  text-align: center;
  padding: 30px 20px;
  border-radius: var(--border-radius);
  background-color: var(--white);
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.highlight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.highlight-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.highlight-icon i {
  font-size: 36px;
  color: var(--secondary-color);
}

.highlight-card h3 {
  margin-bottom: 15px;
}

/* Departments */
.departments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.department-card {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  background-color: var(--white);
  transition: var(--transition);
}

.department-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.department-image {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.department-content {
  padding: 25px;
}

.department-content h3 {
  margin-bottom: 10px;
}

.department-content p {
  margin-bottom: 20px;
}

/* Campus Gallery */
.campus-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.gallery-item {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  height: 250px;
  box-shadow: var(--shadow);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: white;
  transition: var(--transition);
}

.gallery-overlay h4 {
  margin: 0;
}

/* Admissions */
.admissions-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.admissions-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.info-card {
  background-color: var(--white);
  padding: 25px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.info-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.info-icon i {
  font-size: 24px;
  color: var(--secondary-color);
}

.info-card h3 {
  margin-bottom: 15px;
}

.info-card ul {
  padding-left: 20px;
}

.info-card li {
  margin-bottom: 8px;
}

.registration-form {
  background-color: var(--white);
  padding: 30px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 25px;
  transition: var(--transition);
}

/* Events */
.events-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.event-card {
  display: flex;
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.event-date {
  background-color: var(--secondary-color);
  color: var(--white);
  padding: 15px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.event-date .day {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
}

.event-date .month {
  font-size: 1rem;
  text-transform: uppercase;
}

.event-details {
  padding: 20px;
}

.event-details h3 {
  margin-bottom: 10px;
}

.event-meta {
  color: var(--text-light);
  margin-bottom: 10px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Testimonials */
.testimonial-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.testimonial-content {
  margin-bottom: 20px;
  font-style: italic;
  position: relative;
}

.testimonial-content::before {
  content: '\201C';
  font-size: 50px;
  color: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: -15px;
  top: -15px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.testimonial-author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--white);
}

.testimonial-author h4 {
  margin-bottom: 0;
  color: var(--white);
}

.testimonial-author p {
  margin-bottom: 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Contact */
.contact-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.contact-card {
  padding: 25px;
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  text-align: center;
}

.contact-icon {
  width: 60px;
  height: 60px;
  background-color: var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
}

.contact-icon i {
  font-size: 24px;
  color: var(--secondary-color);
}

.contact-social {
  padding: 25px;
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  text-align: center;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.social-icons a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--accent-color);
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.social-icons a:hover {
  background-color: var(--secondary-color);
  color: var(--white);
  transform: translateY(-3px);
}

.contact-map {
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  height: 400px;
}

.contact-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* Footer */
footer {
  background-color: var(--primary-color);
  color: var(--white);
}

.footer-top {
  padding: 60px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-widget h3 {
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-widget h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: var(--secondary-color);
}

.footer-widget p {
  opacity: 0.8;
  margin-bottom: 20px;
}

.footer-subscribe {
  margin-top: 25px;
}

.footer-subscribe h4 {
  margin-bottom: 15px;
  font-size: 1rem;
}

.footer-subscribe form {
  display: flex;
  gap: 10px;
}

.footer-subscribe input {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 15px;
  color: var(--white);
  border-radius: var(--border-radius);
}

.footer-subscribe input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.footer-subscribe button {
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  width: 50px;
  cursor: pointer;
  transition: var(--transition);
}

.footer-subscribe button:hover {
  background-color: #a8102a;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--secondary-color);
  padding-left: 5px;
}

.footer-bottom {
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  margin-bottom: 0;
  font-size: 0.9rem;
  opacity: 0.7;
}

.footer-legal {
  display: flex;
  gap: 20px;
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  transition: var(--transition);
}

.footer-legal a:hover {
  color: var(--secondary-color);
}

/* Dashboard */
.dashboard-container {
  display: none;
  background-color: var(--bg-light);
  min-height: 100vh;
  padding: 30px 20px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
}

.student-info {
  margin-bottom: 30px;
}

.student-profile {
  display: flex;
  gap: 30px;
  align-items: center;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: var(--white);
}

.profile-details h3 {
  margin-bottom: 10px;
}

.profile-details p {
  margin-bottom: 5px;
}

.dashboard-widgets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.attendance-card {
  text-align: center;
}

.attendance-chart {
  margin: 20px 0;
}

.progress-circle {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #f0f0f0;
  margin: 0 auto;
  overflow: hidden;
}

.progress-circle::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  z-index: 1;
}

.progress-circle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(var(--secondary-color) var(--percentage), transparent 0deg);
}



JAVASCRPIT


// Existing array of students
const students = [
  {
    name: "Farddin Khan",
    rollNo: "12345678",
    course: "B.Sc Computer Science",
    semester: "2",
    subjects: ["CS201 - Web Development", "MA202 - Discrete Math", "HS203 - Communication"]
  }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim().toLowerCase();
  const rollNo = document.getElementById("rollNo").value.trim();

  const student = students.find(
    s => s.name.toLowerCase() === name && s.rollNo === rollNo
  );

  if (student) {
    showDashboard(student);
    document.getElementById("errorMessage").textContent = "";
  } else {
    document.getElementById("errorMessage").textContent = "Invalid name or roll number.";
  }
});


function showDashboard(student) {
  document.getElementById("studentName").textContent = student.name;
  document.getElementById("studentRollNo").textContent = student.rollNo;
  document.getElementById("studentCourse").textContent = student.course || "N/A";
  document.getElementById("studentSemester").textContent = student.semester || "N/A";

  const subjectList = document.getElementById("subjectList");
  subjectList.innerHTML = "";
  (student.subjects || []).forEach(subject => {
    const li = document.createElement("li");
    li.textContent = subject;
    subjectList.appendChild(li);
  });

  toggleView("dashboard");
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  toggleView("login");
  document.getElementById("loginForm").reset();
});


document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const newStudent = {
    name: document.getElementById("regName").value.trim(),
    rollNo: document.getElementById("regRollNo").value.trim(),
    age: document.getElementById("regAge").value.trim(),
    email: document.getElementById("regEmail").value.trim(),
    phone: document.getElementById("regPhone").value.trim(),
    fatherName: document.getElementById("regFatherName").value.trim(),
    course: "B.Sc Computer Science",
    semester: "1",
    subjects: ["CS101 - Intro to CS", "MA101 - Algebra", "HS101 - English"]
  };

  students.push(newStudent);

  document.getElementById("registerMessage").textContent =
    "Registration successful! You can now log in.";

  document.getElementById("registerForm").reset();
});

document.getElementById("loginTab").addEventListener("click", () => toggleView("login"));
document.getElementById("registerTab").addEventListener("click", () => toggleView("register"));

function toggleView(view) {
  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("registerSection").classList.add("hidden");
  document.getElementById("studentDashboard").classList.add("hidden");

  if (view === "login") document.getElementById("loginSection").classList.remove("hidden");
  if (view === "register") document.getElementById("registerSection").classList.remove("hidden");
  if (view === "dashboard") document.getElementById("studentDashboard").classList.remove("hidden");

  
  document.getElementById("errorMessage").textContent = "";
  document.getElementById("registerMessage").textContent = "";
}


// let time = 90;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }



// let i = 10;
// if(i<5, i++){
//   console.log("Good morning");
// }else{
//   console.log("Good night");
// }


// sum with mininum row and colume


// function minSum(grid) {
//     const rows = grid.length;
//     const cols = grid[0].length;

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (i === 0 && j === 0) continue; 
//             else if (i === 0) grid[i][j] += grid[i][j - 1]; 
//             else if (j === 0) grid[i][j] += grid[i - 1][j]; 
//             else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]); 
//         }
//     }

//     return grid[rows - 1][cols - 1];
// }

// const grid = [
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1]
// ];

// console.log(minSum(grid));


