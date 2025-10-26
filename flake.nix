{
  description = "Node.js + npm development environment with direnv";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        name = "node-npm-shell";

        buildInputs = [
          pkgs.nodejs_22
        ];

        shellHook = ''
          echo "🟢 Node.js $(node -v) with npm $(npm -v) ready!"
        '';
      };
    };
}

