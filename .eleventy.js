// 11ty configuration
module.exports = config => {

    // 11ty defaults
    return {
  
        dir: {
        input: "src/*",
        output: "_site", 
      }
  
    };
  };
  

module.exports = {
    dir: {
        // ⚠️ These values are both relative to your input directory.
        includes: "src/_includes",
        layouts: "src/_includes/layouts"
    }
};