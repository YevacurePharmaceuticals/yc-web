import MetaTags from '../components/seo/MetaTags';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Star, Quote, UserCircle, Stethoscope } from 'lucide-react';
import './Feedback.css';

const doctorReviews = [
  {
    name: 'Dr. Ankit Sharma',
    specialty: 'Dermatologist',
    location: 'Delhi',
    rating: 5,
    review:
      'YC FACIUM range has shown excellent results in my patients with hyperpigmentation. The Glutathione formulation is well-balanced and suitable for Indian skin types. I regularly recommend the facewash and cream as part of my treatment protocols.',
  },
  {
    name: 'Dr. Priya Mehta',
    specialty: 'General Physician',
    location: 'Mumbai',
    rating: 5,
    review:
      'YEVAMOX-CV has been a reliable antibiotic in my practice. The bioavailability is excellent and patient compliance is good. Yevacure maintains consistent quality across batches which is crucial for prescription medications.',
  },
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'Trichologist',
    location: 'Bangalore',
    rating: 4,
    review:
      'I have been recommending HAIRSALUS 5% Minoxidil to my patients with androgenetic alopecia. The alcohol-free formula causes less scalp irritation compared to many alternatives. COLTIHAIR tablets complement the topical treatment well for comprehensive hair care.',
  },
  {
    name: 'Dr. Sneha Patel',
    specialty: 'Hepatologist',
    location: 'Ahmedabad',
    rating: 5,
    review:
      'YEVAHEP-DS Syrup is a well-formulated herbal liver tonic. The sugar-free formulation is particularly useful for my diabetic patients who need liver support. The combination of Silymarin with traditional herbs is scientifically sound.',
  },
];

const customerReviews = [
  {
    name: 'Rahul Verma',
    location: 'Delhi',
    rating: 5,
    review:
      'Been using EBODERM shampoo for 3 months now. My dandruff problem which persisted for years is completely resolved. The ketoconazole formula is very effective without drying out my hair.',
  },
  {
    name: 'Ananya Singh',
    location: 'Noida',
    rating: 5,
    review:
      'YC FACIUM Face Serum is amazing! My skin looks visibly brighter and the fine lines around my eyes have reduced. Worth every rupee.',
  },
  {
    name: 'Vikram Joshi',
    location: 'Ghaziabad',
    rating: 4,
    review:
      'YEVAVIT9G multivitamin capsules have noticeably improved my energy levels. I feel more active throughout the day. Good quality supplement at a reasonable price.',
  },
  {
    name: 'Meera Reddy',
    location: 'Hyderabad',
    rating: 5,
    review:
      'YC SERENE SOFT body lotion is the best I have used for my sensitive skin. No irritation, no fragrance issues, and keeps my skin moisturized all day. Highly recommend.',
  },
  {
    name: 'Amit Patel',
    location: 'Pune',
    rating: 5,
    review:
      'COLTIHAIR tablets along with HAIRSALUS solution have significantly reduced my hair fall. My dermatologist recommended this combination and I can see new hair growth.',
  },
  {
    name: 'Pooja Agarwal',
    location: 'Lucknow',
    rating: 4,
    review:
      'YC PIEDOCARE spray worked wonderfully for my fungal foot issue. The natural ingredients are gentle and the spray application is very convenient.',
  },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={18}
          className={star <= rating ? 'star-filled' : 'star-empty'}
          fill={star <= rating ? '#f59e0b' : 'none'}
          stroke={star <= rating ? '#f59e0b' : '#d1d5db'}
        />
      ))}
    </div>
  );
}

function Feedback() {
  return (
    <div className="feedback-page">
      <MetaTags
        title="Feedback & Testimonials"
        description="Read what healthcare professionals and customers say about Yevacure pharmaceutical products. Trusted reviews from doctors and patients across India."
      />

      {/* Page Banner */}
      <PageBanner
        title="Feedback & Testimonials"
        subtitle="Hear from healthcare professionals and customers who trust Yevacure"
        breadcrumbItems={[
          { label: 'Home', to: '/' },
          { label: 'Feedback' },
        ]}
      />

      {/* Doctor Reviews Section */}
      <section className="doctor-reviews">
        <div className="doctor-reviews-inner">
          <SectionHeading
            title="What Healthcare Professionals Say"
            subtitle="Trusted recommendations from doctors across specialties"
          />
          <div className="doctor-grid">
            {doctorReviews.map((doctor) => (
              <div key={doctor.name} className="doctor-card">
                <div className="doctor-info">
                  <div className="doctor-icon">
                    <Stethoscope size={28} />
                  </div>
                  <div>
                    <h3 className="doctor-name">{doctor.name}</h3>
                    <p className="doctor-specialty">
                      {doctor.specialty}, {doctor.location}
                    </p>
                  </div>
                </div>
                <div className="doctor-review-content">
                  <Quote size={20} className="quote-icon" />
                  <p className="doctor-review">{doctor.review}</p>
                </div>
                <StarRating rating={doctor.rating} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="customer-reviews">
        <div className="customer-reviews-inner">
          <SectionHeading
            title="Customer Experiences"
            subtitle="Real feedback from people who use our products every day"
          />
          <div className="customer-grid">
            {customerReviews.map((customer) => (
              <div key={customer.name} className="customer-card">
                <div className="customer-info">
                  <div className="customer-icon">
                    <UserCircle size={36} />
                  </div>
                  <div>
                    <h3 className="customer-name">{customer.name}</h3>
                    <p className="customer-location">{customer.location}</p>
                  </div>
                </div>
                <p className="customer-review">{customer.review}</p>
                <StarRating rating={customer.rating} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="feedback-cta">
        <div className="feedback-cta-inner">
          <h2 className="feedback-cta-title">Share Your Experience</h2>
          <p className="feedback-cta-text">
            Your feedback helps us improve and serves as a guide for others.
            If you have used Yevacure products, we would love to hear about
            your experience. Reach out to us and share your story.
          </p>
          <Button to="/contact" size="lg">
            Submit Your Feedback
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Feedback;
