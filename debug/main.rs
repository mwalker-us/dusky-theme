use clap::Parser;
use properties;

/**
 * List of command line arguments available for OhMyTerm.
 *
 * https://rust-cli.github.io/book/tutorial/cli-args.html
 */
#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
struct OhMyTermArgs {
    // Theme to use.
    #[arg(short, long)]
    theme: String
}

fn main() {
    let args = OhMyTermArgs::parse();
    println!("Theme: {}", args.theme);
    println!("function: {}", properties::add(1, 2))
}
