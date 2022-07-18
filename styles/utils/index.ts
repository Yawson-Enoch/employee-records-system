import { css } from 'styled-components';

export const Wrapper = css`
  width: min(95%, var(--max-width));
  margin-inline: auto;
`;

export const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlowContent = css`
  > :where(:not(:first-child)) {
    margin-top: var(--fs-medium);
  }
`;
