# Scroll Effects Guide

## Overview
Your project now includes powerful scroll-triggered animations that reveal content as users scroll through your site. These effects use the Intersection Observer API combined with Framer Motion for smooth, performant animations.

## Components Available

### 1. **FadeInUp**
Elements fade in and slide up from the bottom when they enter the viewport.

```tsx
<FadeInUp delay={0}>
  <YourContent />
</FadeInUp>
```

**Props:**
- `children`: React component to animate
- `delay`: Optional delay in seconds (default: 0)

**Use case:** Headings, paragraphs, call-to-action buttons

---

### 2. **ScaleIn**
Elements scale from 90% to 100% while fading in.

```tsx
<ScaleIn delay={0.2}>
  <YourImage />
</ScaleIn>
```

**Props:**
- `children`: React component to animate
- `delay`: Optional delay in seconds (default: 0)

**Use case:** Images, cards, mockups, important visual elements

---

### 3. **SlideLeft**
Elements slide in from the left with a fade effect.

```tsx
<SlideLeft delay={0.1}>
  <TextContent />
</SlideLeft>
```

**Props:**
- `children`: React component to animate
- `delay`: Optional delay in seconds (default: 0)

**Use case:** Left-column content in split layouts

---

### 4. **SlideRight**
Elements slide in from the right with a fade effect.

```tsx
<SlideRight delay={0.1}>
  <ImageContent />
</SlideRight>
```

**Props:**
- `children`: React component to animate
- `delay`: Optional delay in seconds (default: 0)

**Use case:** Right-column content in split layouts

---

### 5. **StaggerContainer + StaggerItem**
Creates cascading animations where items animate in sequence.

```tsx
<StaggerContainer staggerDelay={0.1}>
  <StaggerItem><Item1 /></StaggerItem>
  <StaggerItem><Item2 /></StaggerItem>
  <StaggerItem><Item3 /></StaggerItem>
</StaggerContainer>
```

**Props (StaggerContainer):**
- `children`: Stagger items
- `staggerDelay`: Delay between each item (default: 0.1)

**Use case:** Lists, grids of items, step-by-step processes

---

### 6. **ScrollSection**
Wraps an entire section with scroll detection and animation controls.

```tsx
<ScrollSection threshold={0.15}>
  <EntireSectionContent />
</ScrollSection>
```

**Props:**
- `children`: Section content
- `className`: CSS class name (optional)
- `style`: Inline styles (optional)
- `threshold`: When to trigger animation (0-1, default: 0.15)

**Use case:** Full section animations, background effects

---

## Usage Examples

### Example 1: Process Steps (Cascade Effect)
```tsx
import { StaggerContainer, StaggerItem, FadeInUp } from "@/components/ScrollSection";

<StaggerContainer staggerDelay={0.15}>
  {PROCESS_STEPS.map((step, i) => (
    <StaggerItem key={i}>
      <ProcessCard step={step} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Example 2: Split Layout (Left-Right Animation)
```tsx
import { SlideLeft, SlideRight } from "@/components/ScrollSection";

<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
  <SlideLeft>
    <TextContent />
  </SlideLeft>
  
  <SlideRight>
    <ImageContent />
  </SlideRight>
</div>
```

### Example 3: Testimonial Cards
```tsx
import { FadeInUp } from "@/components/ScrollSection";

<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
  {testimonials.map((item, i) => (
    <FadeInUp key={i} delay={i * 0.2}>
      <TestimonialCard {...item} />
    </FadeInUp>
  ))}
</div>
```

### Example 4: Image Reveal
```tsx
import { ScaleIn } from "@/components/ScrollSection";

<ScaleIn delay={0.3}>
  <div style={{ 
    borderRadius: 20, 
    overflow: "hidden" 
  }}>
    <img src="/my-image.png" alt="" />
  </div>
</ScaleIn>
```

---

## Already Applied Effects

The following components have scroll effects already implemented:

1. ✅ **Process Steps** - Fade-in-up with cascade
2. ✅ **Testimonials** - Staggered fade-in
3. ✅ **Device Mockups** - Slide-right effect
4. ✅ **Problem Section Stats** - Scale-in effect

---

## Performance Tips

1. **Threshold Setting**: Use `threshold={0.15}` for most sections to trigger animation when 15% of element is visible
2. **Delay Staggering**: Keep delays between 0.1-0.3s for smooth cascades
3. **Avoid Over-Animation**: Not every element needs an animation - focus on key sections
4. **Mobile Optimization**: Animations automatically respect `prefers-reduced-motion` on accessible devices

---

## Customization

### Modify Animation Duration
Each component has a 0.5-0.6s default transition. To change:

```tsx
// Edit src/components/ScrollSection.tsx
transition={{ duration: 0.8, delay }} // Increase from 0.6 to 0.8
```

### Create Custom Animations
```tsx
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function CustomRotateIn({ children }: { children: React.ReactNode }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: -10 }}
      animate={isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Browser Support

All animations use the Intersection Observer API:
- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 15+
- ✅ Mobile browsers (iOS Safari 12.2+, Chrome Mobile)

---

## Troubleshooting

**Animation not triggering?**
- Increase threshold value (e.g., `threshold={0.3}`)
- Check if element is actually entering viewport
- Inspect with DevTools to see if Intersection Observer is firing

**Animation too fast/slow?**
- Adjust `duration` in the component's transition
- Check delay conflicts with parent animations

**Performance issues?**
- Reduce number of animated elements per section
- Use `will-change: transform` CSS for better performance
- Consider disabling animations on mobile with media queries

---

## Next Steps

1. Apply scroll effects to FAQ section
2. Add animations to footer content
3. Create entrance effects for modal/dialog components
4. Implement scroll-linked animations for parallax effects
