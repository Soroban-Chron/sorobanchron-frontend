# Components

Reusable React components for SorobanChron.

## Available Components

### JobCard
Displays a single automation job with its status and configuration.

**Props:**
```typescript
interface Props {
  job: Job;
}
```

**Features:**
- Shows job status (Active/Paused)
- Displays execution interval in human-readable format
- Shows last execution time
- Displays fee pool balance
- Full address tooltip on hover
- Accessible ARIA labels

### RegisterForm
Form for registering new automation jobs.

**Props:**
```typescript
interface Props {
  onSubmit: (params: RegisterJobParams) => Promise<void>;
}
```

**Features:**
- Input validation with error messages
- Address format validation
- Interval range checking
- Deposit amount validation
- Loading state during submission
- Accessible form labels and error messages
- Form reset on successful submission
