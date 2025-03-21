FROM oven/bun:alpine AS base

WORKDIR /app

FROM base AS deps

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN bun run build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/public ./public

RUN mkdir .next && chown bun:bun .next

COPY --from=builder --chown=bun:bun /app/.next/standalone ./
COPY --from=builder --chown=bun:bun /app/.next/static ./.next/static

USER bun

EXPOSE 3002

ENV PORT=3002

CMD ["bun", "server.js"]
