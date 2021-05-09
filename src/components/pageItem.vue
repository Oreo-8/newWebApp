<template>
  <div id="page-item">
    <el-card shadow="hover">
      <el-link type="primary">
        文章标题：为什么MySQL不推荐使用子查询和join
      </el-link>
      <el-row :gutter="10">
        <el-col :span="15" style="height: 202px">
          <div class="div-row">
            <div class="author-avatar">
              <el-avatar icon="el-icon-user-solid"></el-avatar>
            </div>
            <el-link style="margin-left: 10px">name</el-link>
          </div>
          <div id="del-msg">
            <el-card shadow="never" style="pointer-events: none">
              <iframe
                height="130"
                frameborder="0"
                width="100%"
                scrolling="no"
                seamless
                srcdoc="<p>前言：</p><p><strong>1.对于mysql，不推荐使用子查询和join是因为本身join的效率就是硬伤，一旦数据量很大效率就很难保证，强烈推荐分别根据索引单表取数据，然后在程序里面做join，merge数据。</strong></p><p><strong>2.子查询就更别用了，效率太差，执行子查询时，MYSQL需要创建临时表，查询完毕后再删除这些临时表，所以，子查询的速度会受到一定的影响，这里多了一个创建和销毁临时表的过程。</strong></p><p><strong>3.如果是JOIN的话，它是走嵌套查询的。小表驱动大表，且通过索引字段进行关联。如果表记录比较少的话，还是OK的。大的话业务逻辑中可以控制处理。</strong></p><p><strong>4.数据库是最底层的，瓶颈往往是数据库。建议数据库只是作为数据store的工具，而不要添加业务上去。</strong></p><p><strong><em>一、应用层关联的优势：</em></strong></p><p>让缓存的效率更高。许多应用程序可以方便地缓存单表查询对应的结果对象。如果关联中的某个表发生了变化，那么就无法使用查询缓存了，而拆分后，如果某个表很少改变，那么基于该表的查询就可以重复利用查询缓存结果了。</p><p>将查询分解后，执行单个查询可以减少锁的竞争。</p><p>在应用层做关联，可以更容易对数据库进行拆分，更容易做到高性能和可扩展。</p><p>查询本身效率也可能会有所提升。查询id集的时候，使用IN（）代替关联查询，可以让MySQL按照ID顺序进行查询，这可能比随机的关联要更高效。</p><p>可以减少冗余记录的查询。在应用层做关联查询，意味着对于某条记录应用只需要查询一次，而在数据库中做关联查询，则可能需要重复地访问一部分数据。从这点看，这样的重构还可能会减少网络和内存的消艳。</p><p>更进一步，这样做相当于在应用中实现了哈希关联，而不是使用MySQL的嵌套循环关联。某些场景哈希关联的效率要高很多。</p><p><strong><em>二、应用层关联的使用场景：</em></strong></p><p>当应用能够方便地缓存单个查询的结果的时候</p><p>当可以将数据分布到不同的MySQL服务器上的时候</p><p>当能够使用IN（）的方式代替关联查询的时候</p><p>并发场景多，DB查询频繁，需要分库分表</p><p><strong><em>三、不推荐使用join的原因：</em></strong></p><p>1.DB承担的业务压力大，能减少负担就减少。当表处于百万级别后，join导致性能下降；</p><p>2.分布式的分库分表。这种时候是不建议跨库join的。目前mysql的分布式中间件，跨库join表现不良。</p><p>3.修改表的schema，单表查询的修改比较容易，join写的sql语句要修改，不容易发现，成本比较大，当系统比较大时，不好维护。</p><p>四、不使用join的解决方法：</p><p>在业务层，单表查询出数据后，作为条件给下一个单表查询。也就是子查询。&nbsp;会担心子查询出来的结果集太多。mysql对in的数量没有限制，但是mysql限制整条sql语句的大小。通过调整参数max_allowed_packet ，可以修改一条sql的最大值。建议在业务上做好处理，限制一次查询出来的结果集是能接受的。</p><p><strong><em>五、再来说说join查询的好处：</em></strong></p><p>1.做分页查询：</p><p>关联查询的好处时候可以做分页，可以用副表的字段做查询条件，在查询的时候，将副表匹配到的字段作为结果集，用主表去in它，但是问题来了，如果匹配到的数据量太大就不行了，也会导致返回的分页记录跟实际的不一样，解决的方法可以交给前端，一次性查询，让前端分批显示就可以了，这种解决方案的前提是数据量不太，因为sql本身长度有限。</p>"
              >
              </iframe>
            </el-card>
          </div>
        </el-col>
        <el-col :span="9" class="imag-div">
          <div id="del-msg">
            <el-card shadow="never">
              <el-image
                style="width: 100%; height: 195px"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                fit="contain"
              >
                <div slot="error" class="image-slot">
                  <span>暂无图片</span>
                </div>
              </el-image>
            </el-card>
          </div>
        </el-col>
      </el-row>

      <div class="div-row" style="margin-top: 8px">
        <div class="el-icon-view">
          <span class="my-size">10</span>
        </div>
        <div class="el-icon-s-comment">
          <span class="my-size">10</span>
        </div>
        <div class="el-icon-time"><span class="my-size">2021-05-09</span></div>
        <div class="my-size" />
        <div class="my-size" />
        <div class="my-size" />
        <i class="el-icon-price-tag" style="margin-right: 10px">博客标签:</i>
        <el-tag size="small" class="my-tag">标签一</el-tag>
        <el-tag size="small" class="my-tag">标签一</el-tag>
        <el-tag size="small" class="my-tag">标签一</el-tag>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "pageItem",
  data() {
    return {};
  },
};
</script>
<style scoped>
.author-avatar {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
<style lang="stylus">
#page-item {
  margin-bottom: 10px;

  #del-msg {
    .el-card__body {
      padding: 0px !important;
    }

    .image-slot {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #f5f7fa;
      color: #909399;
      font-size: 30px;
    }
  }

  .div-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .my-size {
    font-size: 12px;
    margin-right: 10px;
  }

  .my-tag {
    margin-right: 10px;
  }
}
</style>