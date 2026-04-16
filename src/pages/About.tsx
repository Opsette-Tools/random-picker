import { useNavigate } from "react-router-dom";
import { ArrowLeft, Dices } from "lucide-react";

export default function About() {
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
        <h1 className="text-lg font-bold tracking-tight text-foreground">About</h1>
      </header>

      <main className="flex-1 w-full max-w-lg mx-auto px-4 py-6 space-y-5 text-sm text-muted-foreground leading-relaxed">
        <div className="flex justify-center">
          <Dices className="h-12 w-12 text-primary" />
        </div>

        <h2 className="text-xl font-bold text-foreground text-center">About Random Picker</h2>
        <p className="text-xs text-center text-muted-foreground/80">
          A business tool from Opsette Marketplace.
        </p>

        <p className="text-foreground font-medium text-base text-center">
          Make a fair pick from any list — fast.
        </p>

        <div className="space-y-3">
          <h3 className="text-foreground font-semibold">How it works</h3>
          <ol className="list-decimal list-inside space-y-1.5">
            <li>Paste or type your list — one item per line.</li>
            <li>Tap <strong className="text-foreground">Pick</strong> to get a random winner.</li>
            <li>Toggle <strong className="text-foreground">No Repeats</strong> to remove winners from future picks — great for raffles and team assignments.</li>
            <li>Save lists as presets for quick reuse.</li>
          </ol>
        </div>

        <p className="text-xs text-center text-muted-foreground pt-2">
          All data stays on your device — nothing is sent to any server.
        </p>

        <p className="text-xs text-center text-muted-foreground/70">
          Find more tools at{' '}
          <a href="https://opsette.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
            opsette.io
          </a>.
        </p>
      </main>
    </div>
  );
}
