# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/7a82915e-d201-4d08-b5c7-4604442f8071

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7a82915e-d201-4d08-b5c7-4604442f8071) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Environment configuration

Set the `VITE_PLATFORM_ADMIN_EMAILS` environment variable (comma-separated list) to designate which authenticated users should
have platform admin access when Supabase role assignments are unavailable. See `.env` for an example configuration.

### Unlocking the admin dashboard locally

If you just added an admin or business-only route and encounter the "You need a business account" message:

1. Add the email address you sign in with to `VITE_PLATFORM_ADMIN_EMAILS` in your `.env` file. Multiple emails can be supplied by separating them with commas.
2. Restart your Vite dev server so it reads the new environment variable values.
3. Sign out and back in to refresh your Supabase session with the updated access.

When you deploy for production, you can either keep this fallback list up to date or assign the relevant `platform_admin`, `business_admin`, or `business_user` roles directly inside Supabase.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7a82915e-d201-4d08-b5c7-4604442f8071) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
