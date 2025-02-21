# Stenciljs Playground

This is a minimal working example to demonstrate an issue with form payload not working on react-wrapper components past
@stencil/react-output-target@0.7.0.

## Steps to reproduce

On root directory, run:

```bash
npm install
npm run build
```

Then, go to `packages/playground-consumer` and run:

```bash
npm run dev
```

Open your browser on `http://localhost:5173` and you should see the form. Try to submit it and you will see that the
payload is empty. You can check this in the devtools on the network tab. search for "something". The request has failed,
this is expected, but the payload should not be empty.
