import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex items-center gap-2 px-4 py-3 sticky top-0 bg-background/95 backdrop-blur-sm z-10 border-b border-border">
        <button
          onClick={() => navigate('/')}
          className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          aria-label="Back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-bold tracking-tight text-foreground">Privacy</h1>
      </header>

      <main className="flex-1 w-full max-w-lg mx-auto px-4 py-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          <strong className="text-foreground">No personal data is collected.</strong> Random Picker
          does not require an account, login, or any personal information to use.
        </p>
        <p>
          <strong className="text-foreground">Everything stays on your device.</strong> Your lists
          and presets are stored locally in your browser using localStorage. Nothing is sent to any server.
        </p>
        <p>
          <strong className="text-foreground">No tracking or analytics.</strong> No cookies, no analytics,
          no third-party tracking.
        </p>
        <p>
          <strong className="text-foreground">No data is sold or shared.</strong> Since we don't collect
          any data, there is nothing to sell or share.
        </p>

        <p className="text-xs text-muted-foreground/70 pt-2">
          Questions? Reach us through{' '}
          <a href="https://opsette.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
            opsette.io
          </a>.
        </p>
      </main>
    </div>
  );
}
