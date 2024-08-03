import { createDirectus, authentication, rest } from '@directus/sdk';

const client = createDirectus('https://one-api.13.77.2.205.sslip.io')
  .with(
    authentication('session', { credentials: 'include', autoRefresh: true })
  )
  .with(rest({ credentials: 'include' }));

export { client };
