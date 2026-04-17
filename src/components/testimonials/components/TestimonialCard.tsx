import React, { memo } from 'react';
import { Testimonial, EmptyMessage } from '../../../types/testimonials';
import CheckIcon from './CheckIcon';
import styles from '../testimonials.module.css';

interface Props {
  testimonial: Testimonial;
  emptyMsg: EmptyMessage;
}

const TestimonialCard = ({ testimonial, emptyMsg }: Props) => {
  return (
    <div className={styles.tmCard}>
      <div className={styles.tmEmpty}>
        <p className={styles.tmEmptyLine1}>{emptyMsg.line1}</p>
        <p className={styles.tmEmptyLine2}>{emptyMsg.line2}</p>
      </div>
      <div className={styles.tmDivider} />
      <div className={styles.tmPerson}>
        <div className={styles.tmAvatar}>{testimonial.initials}</div>
        <div className={styles.tmPersonInfo}>
          <p className={styles.tmName}>{testimonial.name}</p>
          <p className={styles.tmRole}>{testimonial.role} · {testimonial.company}</p>
        </div>
      </div>
      <a 
        className={styles.tmVerifyBtn} 
        href={testimonial.reviewUrl} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <CheckIcon />
        Verify this review
      </a>
    </div>
  );
};

export default memo(TestimonialCard);