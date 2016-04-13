# plugins/slugify.coffee
# Plugin overwrites default slug for content in /blog/articles to /blog/:year etc
module.exports = (env, callback) ->

  defaults =
    postsDir: 'blog/articles' # directory containing blog posts
    template: 'article.jade'
    filenameTemplate: '/blog/:year/:month/:title/index.html' # Here's the magic part

  # assign defaults for any option not set in the config file
  options = env.config.blog or {}
  for key, value of defaults
    options[key] ?= defaults[key]

  class SlugifyPage extends env.plugins.MarkdownPage
    ### DRYer subclass of MarkdownPage ###

    getTemplate: ->
      @metadata.template or options.template or super()

    getFilenameTemplate: ->
      @metadata.filenameTemplate or options.filenameTemplate or super()

  # register the plugin
  prefix = if options.postsDir then options.postsDir + '/' else ''
  env.registerContentPlugin 'slugify', prefix + '**/*.*(markdown|mkd|md)', SlugifyPage

  # done!
  callback()