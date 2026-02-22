import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-primary-700 text-white hover:bg-primary-800 border-primary-700',
  secondary: 'bg-accent-500 text-white hover:bg-accent-600 border-accent-500',
  outline: 'bg-transparent text-primary-700 border-primary-700 hover:bg-primary-50',
  ghost: 'bg-transparent text-primary-700 hover:bg-primary-50 border-transparent',
};

const sizes = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

export default function Button({ children, variant = 'primary', size = 'md', href, to, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-lg border-2 transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  if (href) return <a href={href} className={classes} {...props}>{children}</a>;
  return <button className={classes} {...props}>{children}</button>;
}
