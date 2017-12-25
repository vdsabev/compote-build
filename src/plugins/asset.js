const getAssetRule = (assets) => ({
  test: new RegExp(`\\.(${assets.join('|')})$`),
  loader: 'file-loader?name=[name].[ext]'
});

exports.getAssetRule = getAssetRule;
