<div align="center">
<img src="./src/app/favicon.ico" width="auto" /> 
<h3>
 The TOST Test page 👨🏼‍💻 Matias Santillan
</h3>
</div>

<div align="center">
    <a href="#" target="_blank">
        Preview
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#getting-started">
        Getting Started
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#commands">
        Commands
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#license">
        License
    </a>
    <span>&nbsp;✦&nbsp;</span>
</div>

## 🛠️ Stack

- [**Next**](https://nextjs.org/) - The React framework for the web.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with syntax for types.
- [**Tailwindcss**](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [**Leaflet**](https://leafletjs.com/) - An open-source JavaScript library for mobile-friendly interactive maps.
- [**fontsource**](https://fontsource.org/) - Self-host Open Source fonts in neatly bundled NPM packages.

## 🚀 Getting Started

1. [Fork](https://github.com/Matisantillan11/tots-test/fork) or clone this repository.

```bash
git clone git@github.com:Matisantillan11/tots-test.git
```

2. Install the dependencies:

- I use [bun](https://bun.sh) to install and manage the dependencies.

```bash
# Install bun for MacOS, WSL & Linux:
curl -fsSL https://bun.sh/install | bash

# Install bun for Windows:
powershell -c "iwr bun.sh/install.ps1|iex"

# Install with bun:
bun install
```

- or you can use [pnpm](https://pnpm.io):

```bash
# Install pnpm globally if you don't have it:
npm install -g pnpm

# Install dependencies:
pnpm install
```

3. Run the development server:

```bash
# Run with bun:
bun dev

# Run with pnpm:
pnpm dev
```

4. Open [**http://localhost:3000**](http://localhost:3000/) with your browser to see the result 🚀

## 🧞 Commands

|     | Command          | Action                                                        |
| :-- | :--------------- | :------------------------------------------------------------ |
| ⚙️  | `start`          | Starts local dev server with build files at `localhost:3000`. |
| ⚙️  | `dev` or `start` | Starts local dev server at `localhost:3000`.                  |
| ⚙️  | `build`          | Build your production site to `./dist/`.                      |
| ⚙️  | `preview`        | Preview your build locally, before deploying.                 |

## 📝 How the project works (Funcionalities)

This project, in its initial stage, loads the map with information requested on the server (SSR) allowing us to preload data provided in the [JSON](./src/mock/countries.json) format and the extra information obtained from the [GraphQL API](https://countries.trevorblades.com).

#### How to use the map

**Zoom**: You can zoom in and out using the controls provided by Leaflet or by using your mouse wheel.

**Markers**: When hovering a marker, additional information requested from the [GraphQL API](https://countries.trevorblades.com) on the server **(emoji, currency, capital, name)** will be displayed.
If you click on the marker and have the zoom level too far from the marker, it will zoom in to bring the marker into closer view.

## 🔑 License

[MIT](#) - Created by **matisantillan11**.
