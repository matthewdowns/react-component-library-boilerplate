# Theme

Components that use colors will import the LESS variables defined in [theme.less](./theme.less).


## Colors

<style>
    .colors {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        padding-left: 0;
    }

    .colors > .color {
        position: relative;
        background-color: rgba(122, 122, 122, 0.025);
        border-radius: 4px;
        padding: 4px 8px;
        margin: 4px 0;
    }

    .colors > .color.light { color: #f0f0f0; }
    .colors > .color.light::after { position: absolute; right: 8px; display: inline-block; content: "#f0f0f0"; color: #f0f0f0; }
  
    .colors > .color.dark { color: #353535; }
    .colors > .color.dark::after { position: absolute; right: 8px; display: inline-block; content: "#353535"; color: #f0f0f0; }

    .colors > .color.primary { color: #aa55ff; }
    .colors > .color.primary::after { position: absolute; right: 8px; display: inline-block; content: "#aa55ff"; color: #f0f0f0; }

    .colors > .color.secondary { color: #0088ff; }
    .colors > .color.secondary::after { position: absolute; right: 8px; display: inline-block; content: "#0088ff"; color: #f0f0f0; }

    .colors > .color.info { color: #aaffff; }
    .colors > .color.info::after { position: absolute; right: 8px; display: inline-block; content: "#aaffff"; color: #f0f0f0; }

    .colors > .color.success { color: #0be06b; }
    .colors > .color.success::after { position: absolute; right: 8px; display: inline-block; content: "#0be06b"; color: #f0f0f0; }

    .colors > .color.warning { color: #ffff03; }
    .colors > .color.warning::after { position: absolute; right: 8px; display: inline-block; content: "#ffff03"; color: #f0f0f0; }

    .colors > .color.error { color: #db3a35; }
    .colors > .color.error::after { position: absolute; right: 8px; display: inline-block; content: "#db3a35"; color: #f0f0f0; }
</style>

<div class="colors">
    <div class="color light">light</div>
    <div class="color dark">dark</div>
    <div class="color primary">primary</div>
    <div class="color secondary">secondary</div>
    <div class="color info">info</div>
    <div class="color success">success</div>
    <div class="color warning">warning</div>
    <div class="color error">error</div>
</div>
