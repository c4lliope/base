// application.js
// The entrypoint of the application's Javascript.
// See config/webpack.config.js for details.

// Set up jQuery to work with Rails
import $ from "jquery";

$(document).ajaxSend(function(e, xhr, options) {
  var token = $("meta[name='csrf-token']").attr("content");
  xhr.setRequestHeader("X-CSRF-Token", token);
});

$(document).ready(function() {
  const env = $("body")[0].dataset.railsEnv;

  if(env === "test") {
    $.fx.off = true;
    $.ajaxSetup({ async: false });
  }
});

// Expose our components to the `react_component` helper
import { mountComponents } from "react-rails-ujs";

import NotImplemented from "components/not_implemented";
import Section from "components/section";
import LoadingIndicator from "components/loading_indicator";

mountComponents({
  NotImplemented,
  Section,
  LoadingIndicator,
});
